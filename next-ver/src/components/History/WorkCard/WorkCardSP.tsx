import { Box, Fade, Link, Stack, Typography } from '@mui/material'

import { TechTag } from '../TechTag'

import type { WorkCardProps } from '.'

export const WorkCardSP: React.FC<WorkCardProps> = ({
  title,
  imageSrc,
  url,
  demoUrl,
  caption,
  techs,
  rightAlign,
}) => {
  // // open/close用
  // const [isClosed, setIsClosed] = useState(!!closeOnMount)
  // const [parentBoxHeight, setParentBoxHeight] = useState<number>()
  // const [dummyTitlePosition, setDummyTitlePosition] = useState<{
  //   top: number
  //   left: number | string
  // }>()

  // const paperRef = useRef<HTMLDivElement>(null)
  // const dummyTitleRef = useRef<HTMLAnchorElement>(null)

  // const open = (): void => {
  //   setIsClosed(false)
  //   if (paperRef.current) setParentBoxHeight(paperRef.current.offsetHeight)
  //   if (dummyTitleRef.current) {
  //     const { offsetTop: top, offsetLeft: left } = dummyTitleRef.current
  //     setDummyTitlePosition({ top, left })
  //   }
  // }

  // const close = (): void => {
  //   setIsClosed(true)
  //   if (dummyTitleRef.current) {
  //     const span = dummyTitleRef.current.firstElementChild
  //     const lineHeight = span?.getClientRects()[0].height
  //     setParentBoxHeight(lineHeight)
  //   }
  //   setDummyTitlePosition({ top: 0, left: '50%' })
  // }

  // useEffect(() => {
  //   const onResize = (): void => {
  //     isClosed ? close() : open()
  //   }

  //   onResize()
  //   window.addEventListener('resize', onResize)
  //   return () => {
  //     window.removeEventListener('resize', onResize)
  //   }
  // }, [isClosed])

  // // image拡大用
  // const [imageBoxHeight, setImageBoxHeight] = useState(0)
  // const [imageSize, setImageSize] = useState({ width: 0, height: 0 })

  // const captionBoxRef = useRef<HTMLDivElement>(null)
  // const imageBoxRef = useRef<HTMLDivElement>(null)
  // const imageRef = useRef<HTMLImageElement>(null)

  // useEffect(() => {
  //   const onImageLoad = (): void => {
  //     if (!captionBoxRef.current || !imageBoxRef.current || !imageRef.current) return

  //     const { offsetHeight: captionBoxHeight } = captionBoxRef.current
  //     const { offsetWidth: imageBoxWidth } = imageBoxRef.current
  //     const { naturalWidth, naturalHeight } = imageRef.current

  //     setImageBoxHeight(captionBoxHeight)

  //     // object-fit: coverとなるように拡大したサイズにする
  //     const scale = Math.max(imageBoxWidth / naturalWidth, captionBoxHeight / naturalHeight)
  //     const width = naturalWidth * scale
  //     const height = naturalHeight * scale

  //     setImageSize({ width, height })
  //   }

  //   if (!imageRef.current) return

  //   if (imageRef.current.complete) {
  //     onImageLoad()
  //     return
  //   }

  //   imageRef.current.addEventListener('load', onImageLoad)
  // }, [])

  return (
    <Fade in={true} timeout={1000}>
      <Stack sx={{ bgcolor: rightAlign ? '#e5e8e7' : '#d3e1df', color: '#333', p: 4 }}>
        <Link
          href={url}
          underline="none"
          sx={{
            fontWeight: 700,
            textDecoration: 'none',
            color: '#333',
            fontSize: '1.6rem',
            textAlign: 'center',
            mb: 1,
          }}
        >
          <span>{title}</span>
        </Link>
        <Box sx={{ height: 300 }}>
          <img
            src={imageSrc}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
        {demoUrl && (
          <Link href={demoUrl} color="#333" variant="body1" sx={{ textAlign: 'center', mt: 1 }}>
            {demoUrl}
          </Link>
        )}
        <Typography sx={{ mt: 1 }}>{caption}</Typography>
        <Stack
          direction="row"
          justifyContent="center"
          flexWrap="wrap"
          useFlexGap
          spacing={1}
          sx={{ mt: 4 }}
        >
          {techs?.map((tag, i) => (
            <TechTag key={i} techType={tag} sx={{ color: '#333', borderColor: '#333' }} />
          ))}
        </Stack>
      </Stack>
    </Fade>
  )
}
