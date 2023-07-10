import { Typography } from '@mui/material'
import type { NextPage } from 'next'

import { MainVisual } from '@/components/MainVisual'
import { EpochCard, PersonalHistory, WorkCard } from '@/components/personalHistory'

const Home: NextPage = () => {
  return (
    <>
      <MainVisual
        listItems={[
          { display: 'About Me' },
          { display: 'Skills' },
          { display: 'History' },
          { display: 'Portfolio Ver. 2' },
          { display: 'Portfolio Ver. 3' },
        ]}
      />
      <Typography variant="h2" textAlign="center" mt={10}>
        -------------------- 以下製作中 --------------------
      </Typography>
      <PersonalHistory>
        <EpochCard
          title="小学6年~"
          caption={`小説「ぼくらの七日間戦争」に出てくるエレクトロニクスの天才中学生のキャラクターに憧れ、独学で電子工作を始める。`}
          newTechs={['java']}
        />
        <EpochCard title="中学校" newTechs={['c', 'PICのアセンブリ言語']} />
        <WorkCard
          title="電気ショックタイマー(電子工作)"
          imageSrc="images/no-image.jpg"
          caption="時間を忘れて作業に熱中することがあり、タイマーをかけても効果をなさなかったため、電気ショックで時間を知らせるタイマーを作ればいいのではないかと思い作った。"
          closeOnMount
        />
        <WorkCard
          title="philip82148/SDCardLibrary"
          url="https://github.com/philip82148/SDCardLibrary"
          imageSrc="images/sd-card-library.png"
          caption="電子工作でICレコーダーを作ったときに作ったSDカードライブラリ。PICの少ないメモリでも動くようにメモリをなるだけ使わないように書いている。"
          rightAlign
        />
        <EpochCard title="高校" newTechs={['html', 'css', 'javascript', 'python']} />
        <WorkCard
          title="水中ドローン(電子工作)"
          imageSrc="images/underwater-drone.jpg"
          caption="高校2年の文化祭で作って展示した。"
          closeOnMount
        />
        <EpochCard
          title="大学"
          newTechs={[
            'jquery',
            'php',
            'mysql',
            'wordpress',
            'flutter',
            'kotlin',
            'typescript',
            'react',
            'next',
            'nest',
          ]}
        />
        <WorkCard
          title="philip82148/mention-generator"
          url="https://github.com/philip82148/mention-generator"
          imageSrc="images/mention-generator.png"
          caption="日吉寄宿舎で、アンケートに回答しなかった人全員をLINEでメンションするという作業があり、面倒くさかったので自動化するプログラムを作った。"
          tags={['javascript']}
        />
        <WorkCard
          title="philip82148/kishukusha-report-supporter"
          url="https://github.com/philip82148/kishukusha-report-supporter"
          imageSrc="images/kishukusha-report-supporter.png"
          caption="日吉寄宿舎の各種届出を、届出を出す側も見る側も便利になるようにLINE BOTを作成した。"
          tags={['php']}
          rightAlign
        />
        <WorkCard
          title="philip82148/kishukusha-meibo"
          url="https://github.com/philip82148/kishukusha-meibo"
          imageSrc="images/kishukusha-meibo.png"
          caption="日吉寄宿舎の寮生の名簿を作る作業が毎年大変だったので、自動化するプログラムを作った。"
          tags={['react', 'typescript']}
        />
        <WorkCard
          title="philip82148/kishukusha-meibo"
          url="https://github.com/philip82148/kishukusha-meibo"
          imageSrc="images/kishukusha-meibo.png"
          caption="日吉寄宿舎で、アンケートに回答しなかった人全員をLINEでメンションするという作業があり、面倒くさかったので自動化するプログラムを作った。"
          tags={['react', 'typescript']}
          rightAlign
        />
      </PersonalHistory>
    </>
  )
}
export default Home
