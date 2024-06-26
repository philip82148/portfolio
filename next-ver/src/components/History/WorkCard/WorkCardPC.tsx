import CloseIcon from '@mui/icons-material/Close'
import { Box, Fade, IconButton, Link, Modal, Paper, Stack, Typography } from '@mui/material'
import type { SyntheticEvent } from 'react'
import { memo, useCallback, useEffect, useRef, useState } from 'react'

import type { TechType } from '../TechTag'
import { TechTag } from '../TechTag'

import { MovableCard } from './MovableCard'

import type { WorkCardProps } from '.'

export const WorkCardPC: React.FC<WorkCardProps> = ({
  type,
  title,
  imageSrc,
  url,
  demoUrl,
  caption,
  techs,
  isClosed,
  rightAlign,
  onClick,
}) => {
  const cardColor = `${type}.main`

  // open/close用 ---------------------------------------------------------------------------------
  const [openParentBoxHeight, setOpenParentBoxHeight] = useState<number>()
  const [closedParentBoxHeight, setClosedParentBoxHeight] = useState<number>()

  const paperRef = useRef<HTMLDivElement>(null)
  const dummyTitleRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const onResize = (): void => {
      if (!paperRef.current || !dummyTitleRef.current) return

      setOpenParentBoxHeight(paperRef.current.offsetHeight)

      const span = dummyTitleRef.current.firstElementChild
      const lineCount = span?.getClientRects().length ?? 1
      const lineHeight = dummyTitleRef.current.getBoundingClientRect().height / lineCount

      setClosedParentBoxHeight(lineHeight)
    }

    onResize()
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  // modal用 ---------------------------------------------------------------------------------------
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Paper/Titleホバー時用 --------------------------------------------------------------------------
  const [isPaperHovered, setIsPaperHovered] = useState(false)
  const [isTitleHovered, setIsTitleHovered] = useState(false)

  const titleRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const makeHandler = (setter: (value: boolean) => void, value: boolean) => {
      return () => {
        setter(value)
      }
    }

    // ホバー時の動きでマウスが外れないように親要素でやる
    paperRef.current?.parentElement?.addEventListener(
      'mouseenter',
      makeHandler(setIsPaperHovered, true),
    )
    paperRef.current?.parentElement?.addEventListener(
      'mouseleave',
      makeHandler(setIsPaperHovered, false),
    )

    titleRef.current?.addEventListener('mouseenter', makeHandler(setIsTitleHovered, true))
    titleRef.current?.addEventListener('mouseleave', makeHandler(setIsTitleHovered, false))
  }, [])

  const isCardHovered = isTitleHovered || isPaperHovered

  const captionBoxWidth = { lg: 800 * 0.6, xs: 650 * 0.6 }
  const imageBoxWidth = '40%'

  // パフォーマンス改善 ------------------------------------------------------------------------------
  const onTitleClick = useCallback(
    (e: SyntheticEvent<HTMLAnchorElement>) => {
      if (isClosed) {
        e.preventDefault()
        onClick?.()
      }
    },
    [isClosed, onClick],
  )

  const onDemoClick = useCallback((e: SyntheticEvent<HTMLAnchorElement>) => {
    e.stopPropagation()
  }, [])

  const openModal = useCallback(
    (e: SyntheticEvent<HTMLAnchorElement>) => {
      e.stopPropagation()
      if (!demoUrl) setIsModalOpen(true)
    },
    [demoUrl],
  )

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  return (
    <Box
      sx={{
        display: 'grid',
        transition: 'height 1s',
        height: isClosed ? closedParentBoxHeight : openParentBoxHeight,
        transform: !isClosed && isCardHovered ? 'translateY(-4px)' : 'none',
      }}
    >
      <MovableCard
        align={isClosed ? 'center-start' : rightAlign ? 'right' : 'left'}
        outerSx={{ gridArea: '1 / 1 / 2 / 2' }}
        innerSx={{
          width: captionBoxWidth,
          transition: 'margin-left 1s, padding-top 1s',
          p: 4,
          pt: !isClosed ? 4 : 0,
        }}
      >
        <TitleMovableCardChild {...{ titleRef, onTitleClick, url, cardColor, isClosed, title }} />
      </MovableCard>
      <MovableCard
        align={rightAlign ? 'right' : 'left'}
        outerSx={{ gridArea: '1 / 1 / 2 / 2' }}
        innerSx={{ width: { lg: 800, xs: 650 } }}
      >
        <Fade in={!isClosed} timeout={500} style={{ transitionDelay: isClosed ? '0ms' : '500ms' }}>
          <Box sx={{ pb: isCardHovered ? '4px' : 0, mb: isCardHovered ? '-4px' : 0 }}>
            <Paper
              ref={paperRef}
              variant="outlined"
              sx={{ borderRadius: 4, display: 'grid', overflow: 'hidden' }}
              onClick={onClick}
            >
              <MovableCard
                align={rightAlign ? 'right' : 'left'}
                outerSx={{ gridArea: '1 / 1 / 2 / 2' }}
                innerSx={{ width: captionBoxWidth }}
              >
                <CaptionMovableCardChild
                  {...{ dummyTitleRef, title, demoUrl, cardColor, onDemoClick, caption, techs }}
                />
              </MovableCard>
              <MovableCard
                align={rightAlign ? 'left' : 'right'}
                outerSx={{ gridArea: '1 / 1 / 2 / 2' }}
                innerSx={{ width: imageBoxWidth, height: '100%' }}
              >
                <ImageMovableCardChild {...{ demoUrl, imageSrc, openModal }} />
              </MovableCard>
            </Paper>
          </Box>
        </Fade>
      </MovableCard>
      {!demoUrl && <ImageModal {...{ isModalOpen, closeModal, imageSrc }} />}
    </Box>
  )
}

// パフォーマンス改善 ----------------------------------------------------------------------------------
const titleLinkBaseSx = {
  display: 'block',
  fontWeight: 700,
  fontSize: '1.3rem',
}

const TitleMovableCardChild = memo<{
  titleRef: React.RefObject<HTMLAnchorElement>
  onTitleClick: (e: SyntheticEvent<HTMLAnchorElement>) => void
  url: string | undefined
  cardColor: string
  isClosed: boolean | undefined
  title: string
}>(({ titleRef, onTitleClick, url, cardColor, isClosed, title }) => {
  return (
    <Link
      ref={titleRef}
      onClick={onTitleClick}
      href={url}
      target="_blank"
      underline="none"
      sx={[
        titleLinkBaseSx,
        {
          position: 'relative',
          zIndex: 1,
          color: cardColor,
          width: 'fit-content',
          transition: 'margin-left 1s, max-width 1s',
          maxWidth: '100%',
        },
        !!isClosed && {
          cursor: 'pointer',
          ml: -28,
          maxWidth: { xs: '100vw' },
        },
        (!!url || !!isClosed) && {
          '&:hover': {
            mt: -0.5,
            pb: 0.5,
            opacity: 0.8,
          },
        },
      ]}
    >
      {title}
    </Link>
  )
})
TitleMovableCardChild.displayName = 'TitleMovableCardChild'

const CaptionMovableCardChild = memo<{
  dummyTitleRef: React.RefObject<HTMLAnchorElement>
  title: string
  demoUrl: string | undefined
  cardColor: string
  onDemoClick: (e: SyntheticEvent<HTMLAnchorElement>) => void
  caption: React.ReactNode
  techs: TechType[] | undefined
}>(({ dummyTitleRef, title, demoUrl, cardColor, onDemoClick, caption, techs }) => {
  return (
    <Stack justifyContent="space-between" sx={{ p: 4, minHeight: 200 }}>
      <Stack>
        <Link underline="none" ref={dummyTitleRef} sx={[titleLinkBaseSx, { visibility: 'hidden' }]}>
          <span>{title}</span>
        </Link>
        {demoUrl && (
          <Link
            href={demoUrl}
            variant="body2"
            underline="none"
            target="_blank"
            sx={{
              zIndex: 1,
              width: 'fit-content',
              color: '#999',
              fontSize: '0.9rem',
              pt: 0.5,
              '&:hover': {
                mt: -0.5,
                pb: 0.5,
                opacity: 0.8,
              },
            }}
            onClick={onDemoClick}
          >
            {demoUrl}
          </Link>
        )}
        <Typography variant="body2" sx={{ pt: 1 }}>
          {caption}
        </Typography>
      </Stack>
      {techs && (
        <Stack direction="row" flexWrap="wrap" useFlexGap spacing={0.5} sx={{ pt: 2 }}>
          {techs.map((tag, i) => (
            <TechTag key={i} techType={tag} color={cardColor} />
          ))}
        </Stack>
      )}
    </Stack>
  )
})
CaptionMovableCardChild.displayName = 'CaptionMovableCardChild'

const ImageMovableCardChild = memo<{
  demoUrl: string | undefined
  imageSrc: string
  openModal: (e: SyntheticEvent<HTMLAnchorElement>) => void
}>(({ demoUrl, imageSrc, openModal }) => {
  return (
    <Link
      href={demoUrl}
      target="_blank"
      sx={{
        display: 'block',
        position: 'relative',
        zIndex: 2,
        width: '100%',
        height: '100%',
        background: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
      onClick={openModal}
    />
  )
})
ImageMovableCardChild.displayName = 'ImageMovableCardChild'

const ImageModal = memo<{ isModalOpen: boolean; closeModal: () => void; imageSrc: string }>(
  ({ isModalOpen, closeModal, imageSrc }) => {
    return (
      <Modal open={isModalOpen} onClose={closeModal}>
        <Box
          sx={{
            display: 'flex',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: 24,
            color: '#fff',
          }}
        >
          <IconButton
            onClick={closeModal}
            color="inherit"
            sx={{
              position: 'absolute',
              left: '100%',
              bottom: '100%',
              transform: 'translate(-20%, 20%)',
            }}
          >
            <CloseIcon color="inherit" fontSize="large" />
          </IconButton>
          <img
            src={imageSrc}
            alt=""
            style={{
              maxHeight: '80vh',
              maxWidth: '80vw',
              height: '100%',
              width: '100%',
              objectFit: 'contain',
            }}
          />
        </Box>
      </Modal>
    )
  },
)
ImageModal.displayName = 'ImageModal'
