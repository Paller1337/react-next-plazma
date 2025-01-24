import Head from 'next/head'
import Image from 'next/image'
import Promo from '../components/Promo'
import FullSizePreviewInfo from '../components/objects/FullsizePreviewInfo'
import vkCloudLoader from '@/mw/utils/imageLoader'
import { DEFAULTS } from 'defaults'
import YoutubeVideo from '@/components/YoutubeVideo'
import { ReactSVG } from 'react-svg'
import Link from 'next/link'
import NYBookingRoom from '@/components/NYBookingRoom'
import NYBookingSlider from '@/components/NYBookingSlider'
import { Stack, Image as MImage, useMantineTheme, Button } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IoCall, IoCallOutline, IoCallSharp } from "react-icons/io5"
import { useRouter } from 'next/router'
import Snowfall from 'react-snowfall'
import { useEffect, useRef } from 'react'

interface PageIndexProps {
  images: any
}


export default function PageIndex(props: PageIndexProps) {
  const router = useRouter()
  const theme = useMantineTheme()
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
  const queryMd = useMediaQuery(`(max-width: ${theme.breakpoints.md})`)
  const nyRef = useRef(null)
  const snowflakes = useRef(null)

  useEffect(() => {
    if (snowflakes) {
      const snowflake1 = document.createElement('img')
      snowflake1.src = '/img/index/snowflake-1.webp'
      snowflake1.width = 120
      snowflake1.height = 120

      const snowflake2 = document.createElement('img')
      snowflake2.src = '/img/index/snowflake-2.webp'
      snowflake2.width = 120
      snowflake2.height = 120

      const snowflake3 = document.createElement('img')
      snowflake3.src = '/img/index/snowflake-3.webp'
      snowflake3.width = 120
      snowflake3.height = 120

      snowflakes.current = [snowflake1, snowflake2, snowflake3]
    }

  }, [snowflakes])
  return (
    <>
      <Head>
        <title>Парк-отель «PLAZMA»</title>
        <meta name='description' content='Парк-отель «Plazma» расположен в городе 
        Донской Тульской области, в 230 км от Москвы. Место отлично подходит для семейного 
        отдыха на природе, романтических выходных, торжественных и деловых мероприятий,
        а также для спортивных сборов.' />

        <meta
          property='og:title'
          content='Парк-отель «PLAZMA»' />
        <meta
          property='og:description'
          content='Парк-отель «Plazma» расположен в городе 
          Донской Тульской области, в 230 км от Москвы. Место отлично подходит для семейного 
          отдыха на природе, романтических выходных, торжественных и деловых мероприятий,
          а также для спортивных сборов.' />
        <meta
          property='og:image'
          content='' />

        <meta
          property='og:type'
          content='website' />

        <meta name="yandex-verification" content="ad1bbd813f73344a" />
      </Head>

      <main className='page page-index' data-barba="container" data-barba-namespace="home">
        <div className='relative main-wrap' data-scroll-container>


          <Promo booking video />
          {/* <Header /> */}
          <div className='base-bg' data-scroll-section></div>


          {/* <Stack maw={1170} mx={'auto'} my={48} py={0} px={queryMd ? 12 : 40} gap={24} pos={'relative'} align='center'>
            <Snowfall
              wind={[0, 0]}
              color="#fff"
              speed={[1, 1]}
              radius={[12, 18]}
              images={snowflakes.current}
              style={{
                position: 'absolute', zIndex: 15,
                left: 0, right: 0, top: 0, bottom: 0
                // width: '100%', height: nyRef?.current?.offsetHeight
              }}
              snowflakeCount={100}
            />

            <MImage style={{ zIndex: 11 }} src={DEFAULTS.URL.CDN + `/img/index/new-year2025/adv${mobile ? '-min' : ''}.webp`} />
            <Stack ref={nyRef} pos={'absolute'} style={{ zIndex: 10 }} left={0} right={0} top={40} bottom={28} bg={'#f6f6f6'}></Stack>
          </Stack>

          <Stack maw={1170} mx={'auto'} my={48} py={0} px={queryMd ? 12 : 40} gap={24} pos={'relative'} align='center'>
            <Snowfall
              wind={[0, 0]}
              color="#fff"
              speed={[1, 1]}
              radius={[12, 18]}
              images={snowflakes.current}
              style={{
                position: 'absolute', zIndex: 15,
                left: 0, right: 0, top: 0, bottom: 0
                // width: '100%', height: nyRef?.current?.offsetHeight
              }}
              snowflakeCount={100}
            />

            <MImage style={{ zIndex: 11 }} src={DEFAULTS.URL.CDN + `/img/index/new-year2025/program${mobile ? '-min' : ''}.webp`} />
            <Button
              onClick={() => router.push('tel:+79101681761')}
              pos={'relative'} style={{ zIndex: 11 }} bg={'#fff'}
              variant='outline' size={queryMd ? 'xs' : 'md'} h={'fit-content'} w={'fit-content'} color='#262626'
              py={12} px={queryMd ? 32 : 48} radius={0} styles={{ label: { gap: 12 } }}>
              Подробнее
              <Stack align='center' justify='center' w={queryMd ? 18 : 24} h={queryMd ? 18 : 24} style={{ borderRadius: 24, border: '1px solid #262626' }}>
                <IoCallSharp size={queryMd ? 12 : 14} color='#262626' style={{ transform: 'scale(-1, 1)' }} />
              </Stack>
            </Button>
            <Stack ref={nyRef} pos={'absolute'} style={{ zIndex: 10 }} left={0} right={0} top={40} bottom={28} bg={'#f6f6f6'}></Stack>
          </Stack> */}

          {/* New Year Booking */}
          {/* <div className='page-index__ny-booking ny-booking'>
            <div className='container'>
              <div className='ny-booking__head'>
                <h2 className='ny-booking__title'>Новогодние праздники 2024.</h2>
                <span className='ny-booking__desc'>Открыто бронирование 02.01 - 08.01!</span>
                <div className='ny-booking__separator'>
                  <ReactSVG src='/svg/separator.svg' />
                </div>
              </div>

              <div className='ny-booking__info'>
                <div className='ny-booking__text-container line'>
                  <h2 className='ny-booking__text-container-title'>
                    В стоимость включено:
                  </h2>

                  <span className='ny-booking__text'>
                    1. Проживание на 2 дня.
                  </span>
                  <span className='ny-booking__text'>
                    2. Дискотека в ресторане в новогоднюю ночь, где будет работать бар.
                  </span>
                  <span className='ny-booking__text'>
                    3. Развлекательная программа 1 января на свежем воздухе с Дедом Морозом, Снегурочкой, призами, горячими напитками и закусками.
                  </span>
                </div>

                <div className='ny-booking__billboard'>
                  <span className='ny-booking__billboard-title'>Новогодние праздники можно забронировать только по телефону: <br />8-910-168-17-61</span>
                  <div className='ny-booking__billboard-separator' />

                  <span className='ny-booking__billboard-desc'>Наши администраторы с радостью ответят на все ваши вопросы.</span>
                  <span className='ny-booking__billboard-desc bold'>Для бронирования необходимо внести оплату в размере 20% от общей стоимости.</span>
                  <span className='ny-booking__billboard-desc bold'>100% оплата к 10 декабря.</span>
                </div>
              </div>
            </div>
            <div className='ny-booking__rooms'>
              <span className='ny-booking__rooms-title'>Свободные номера на Новогоднее бронирование</span>

              <NYBookingSlider />
            </div>
          </div> */}


          {/* <div className='page-index__new-year i-new-year container'>
            <div className='i-new-year__left'>
              <h2 className='i-new-year__title'>
                Бронирование на Новый Год.
              </h2>
              <div className='i-new-year__container'>
                <div className='i-new-year__text-container line'>
                  <span className='i-new-year__text'>
                    В этом году возможно раннее бронирование
                    со скидкой 10% по НЕвозвратному тарифу.
                  </span>

                  <span className='i-new-year__text bold' style={{ marginTop: 12, marginBottom: 2 }}>
                    Условия:
                  </span>

                  <span className='i-new-year__text'>
                    1. 100% оплата, которая не возвращается в случае отмены<br />
                    2. Действует скидка 10%<br />
                    3. Срок действия тарифа: 6 сентября – 31 октября.<br />
                  </span>
                </div>

                <div className='i-new-year__text-container line'>
                  <span className='i-new-year__text'>
                    После 31 октября бронирование возможно только по стандартному тарифу (без скидки)
                  </span>

                  <span className='i-new-year__text bold' style={{ marginTop: 12, marginBottom: 2 }}>
                    Условия:
                  </span>

                  <span className='i-new-year__text'>
                    1. Для бронирования – оплата в размере 20% от общей стоимости<br />
                    2. 100% оплата должна быть выполнена к 10 декабря<br />
                  </span>
                </div>

                <div className='i-new-year__text-container'>
                  <span className='i-new-year__text'>
                    Также на период новогодних праздников правило «отмена за 7 дней до заезда» не
                    действует, поэтому, пожалуйста, будьте внимательны и обязательно уточните все
                    интересующие вас вопросы у наших администраторов, они с радостью вас проконсультируют.
                  </span>
                </div>

                <div className='i-new-year__text-container'>
                  <span className='i-new-year__text'>
                    Узнать цены и забронировать номер можно только по телефону +7 (910) 168-17-61.
                  </span>
                </div>
              </div>
            </div>
            <div className='i-new-year__right'>
              <div className='i-new-year__fakebg'></div>
              <Image width={570} height={685} src={'/no-optimize-img/index/new-year.jpg'} alt=''
              // loader={vkCloudLoader}
              />
            </div>
          </div> */}

          {/* <div className='page-index__new-year i-new-year container'>
            <div className='i-new-year__left'>
              <h2 className='i-new-year__title'>
                Начало сезона в акватории.
              </h2>
              <div className='i-new-year__container'>
                <div className='i-new-year__text-container'>
                </div>

                <div className='i-new-year__text-container line'>
                  <span className='i-new-year__text'>
                    Цена входа на территорию акватории фиксированная - 200 рублей для взрослых и детей до 24 мая включительно.
                  </span>
                </div>

                <div className='i-new-year__text-container line'>
                  <span className='i-new-year__text'>
                    Открыто бронирование беседок на набережной. Цена фиксированная - 8700 рублей по будням и в выходные до 24 мая включительно.
                  </span>
                </div>

                <div className='i-new-year__text-container'>
                  <span className='i-new-year__text'>
                    Узнать подробнее и забронировать номер можно только по телефону +7 (910) 168-17-61.
                  </span>
                </div>
              </div>
            </div>
            <div className='i-new-year__right'>
              <div className='i-new-year__fakebg'></div>
              <Image width={570} height={470} src={'/img/aquatory/gaz-1.webp'} alt='' />
            </div>
          </div> */}

          <div className='page-index__about-hotel about-hotel container' data-scroll-section >
            <div className='about-hotel__wrapper'
              data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
              <div className='about-hotel__about'>
                <span className='about-hotel__text'>Парк-отель «PLAZMA»</span>
                <span className='about-hotel__desc'>Парк-отель «Plazma» расположен в городе Донской Тульской области, в 230 км от Москвы. </span>
                <span className='about-hotel__desc'> Место отлично подходит для семейного отдыха на природе, романтических выходных, торжественных и деловых мероприятий,
                  а также для спортивных сборов.</span>
              </div>

              <picture className='about-hotel__img img_min'>
                <Image width={670} height={420} src={'/img/index/about-hotel/min.webp'} alt=''
                  loader={vkCloudLoader}
                />
              </picture>
            </div>


            <div className='about-hotel__wrapper reverse'
              data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
              <div className='page-aquatory__list'>
                <span className='page-aquatory__list-title'>Парк-отель «PLAZMA» в цифрах:</span>
                <ul>
                  <li className='page-aquatory__list-item'>7 гектар занимает территория отеля</li>
                  <li className='page-aquatory__list-item'>130 единиц составляет наш номерной фонд</li>
                  <li className='page-aquatory__list-item'>400 человек вмещает отель</li>
                  <li className='page-aquatory__list-item'>1 пляж с водоемом</li>
                  <li className='page-aquatory__list-item'>3 крытых спортивных объекта</li>
                  <li className='page-aquatory__list-item'>3 бани на дровах с бассейном</li>
                  <li className='page-aquatory__list-item'>4 места общепита</li>
                  <li className='page-aquatory__list-item'>1 зал трансформер (конференц-зал, банкетный зал,
                    столовая для спортсменов)</li>
                  <li className='page-aquatory__list-item'>7 открытых волейбольных площадок</li>
                  <li className='page-aquatory__list-item'>2 открытые универсальные спортивные площадки</li>
                  <li className='page-aquatory__list-item'>2 детские площадки </li>
                  <li className='page-aquatory__list-item'>1 воркаут площадка </li>
                </ul>
              </div>

              <picture className='about-hotel__img img_max'>
                <Image width={670} height={550} src={'/img/index/about-hotel/max.webp'} alt=''
                  loader={vkCloudLoader}
                />
              </picture>
            </div>
          </div>

          <YoutubeVideo
            title='Обзорное видео парк-отеля'
            src='vL15ngFeBNM' />

          <div className='page-index__previews preview-blocks' data-scroll-section>
            <FullSizePreviewInfo
              title={'ГОСТИНИЦА'}
              description={`
              Все наши номера выполнены из качественных материалов, а дизайн был разработан с
              учетом удобства и современных тенденций. Мы уверены, что у нас вы сможете
              расслабиться и в полной мере насладиться отдыхом. Наш номерной фонд настолько
              разнообразен, что каждый сможет найти себе что-то по душе. В гостинице 130 номеров,
              которые вмещают 400 человек. У нас есть номера на 2,3,4,5,6,7,8 человек, некоторые
              из них расположены в гостиничных корпусах, а некоторые –отдельные домики с видом на
              набережную.
              `}
              image={2}
              href='/hotel'
              btnTitle='Подробнее'
            />

            <FullSizePreviewInfo
              title={'ПИТАНИЕ'}
              description={`
              У нас есть ресторан, летний шатер и банкетный зал. Ресторан оформлен
              в темных коричневых тонах, предлагая укрыться от солнца летом и насладиться уютной
              обстановкой с камином зимой. Летом вы можете насладиться нашими блюдами на свежем воздухе в
              нашем шатре на полуострове. Для особых мероприятий у нас есть банкетный зал.
              `}
              image={4}
              href='/meals'
              btnTitle='Подробнее'
            />

            <FullSizePreviewInfo
              title={'АКВАТОРИЯ'}
              description={`
              Территория акватории – это самый настоящий городской курорт. У нас вы сможете
              насладиться прогулками вдоль набережной, искупаться в большом искусственном водоеме,
              позагорать на травяном пляже, пожарить шашлыки в беседках, поиграть в волейбол на
              кварцевом песке, устроить баскетбольный матч на открытой универсальной
              спорт.площадке, а ваши дети смогут найти друзей со всей России на наших детских
              площадках. У нас также есть полуостров с бассейном с подогревом и шатром-рестораном,
              где вы сможете насладиться прохладным аперолем и нежнейшей пиццой.
              `}
              image={3}
              href='/aquatory'
              btnTitle='Подробнее'
            />

            <FullSizePreviewInfo
              title={'САУНА'}
              description={`
              На территории отеля есть 3 отдельных бани на дровах со своими особенностями.
              «Аква-люкс» предлагает большой бассейн с зоной джакузи и просторную комнату отдыха.
              «1000 и 1 ночь» удивит вас восточным дизайном, расслабляющим хамамом и соляной
              стеной в русской парилке. «Белая ночь» – это светлые тона и теплый камень, на
              котором можно делать пенный массаж.
              `}
              image={5}
              href='/sauna'
              btnTitle='Подробнее'
            />


            <FullSizePreviewInfo
              title={'МЕРОПРИЯТИЯ'}
              description={`
              У нас есть множество мест для проведения различных мероприятий.. В ресторане можно
              провести выпускной, в банкетном зале – свадьбу, в шатре – юбилей, в беседках –
              детский день рождения, в конференц-зале – тимбилдинг, на травяном пляже – групповые
              занятия по йоге. У нас также есть 5 спортивных объектов, которые могут стать
              площадками для спортивных мероприятий.
              `}
              image={7}
              href='/events'
              btnTitle='Подробнее'
            />

            <FullSizePreviewInfo
              title={'АКТИВНЫЙ ОТДЫХ'}
              description={`
              Парк-отель «Plazma» предлагает множество возможностей для активного отдыха.
              Разомнитесь на теннисном корте или в универсальном спортивном зале. Насладитесь
              пляжными видами спорта на крытых или открытых площадах. Пользуйтесь тренажерами под
              открытым небом и наслаждайтесь свежим воздухом. У нас также есть две универсальные
              спортивные площадки на улице с покрытием из резиновой крошки, где вы можете
              заниматься любимым спортом. Ну и, конечно, наша набережная 500 метров отлично
              подходит для утренней пробежки, велосипеда или самоката.
              `}
              image={6}
              href='/events'
              btnTitle='Подробнее'
            />
          </div>

          <div className='page-index__geo index-geo container' data-scroll-section
            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
            <div className='index-geo__map'>
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A0188186de97a445d0d506425f4fd40ce6840238ccefe968d6d2b153b1b53cc45&amp;source=constructor"
                width="100%" height="500" frameBorder="0"></iframe>
            </div>

            <div className='index-geo__feed'>
              <span className='index-geo__title'>местонахождение</span>

              <span className='index-geo__text'>Тульская область, г. Донской, ул. Герцена, д. 14</span>
            </div>
          </div>

        </div >
      </main >
    </>

  )
}
