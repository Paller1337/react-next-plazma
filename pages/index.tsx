import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import BookingPromo from '../components/bnovo/BookingPromo'
import ReactPlayer from 'react-player'
import Promo from '../components/Promo'
import Link from 'next/link'



export default function PageIndex() {

  return (
    <>
      <main className='page page-index' data-barba="container" data-barba-namespace="home">
        <div className='relative main-wrap' data-scroll-container>
          {/* <div className='main__promo' data-scroll-section>
            <Header />
            <div className="main__video-wrapper">
              <div className="main__video-box">

                <video className="main__video" muted loop autoPlay playsInline>
                  <source src="/video/bg.mp4" type="video/mp4" />
                  <source src="/video/bgvideo.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>

                <div className='main__video-overlay'></div>
              </div>
            </div>
            <div className='main__promo-logo'>
              <h1>
                <span>парк-отель</span>
                <span>plazma</span>
              </h1>
            </div>

            <BookingPromo />
          </div>
 */}


          <Promo booking video />
          {/* <Header /> */}
          <div className='base-bg' data-scroll-section></div>

          <div className='page-index__about-hotel about-hotel container' data-scroll-section>
            <div className='about-hotel__wrapper'>
              <div className='about-hotel__about'>
                <span className='about-hotel__text'>Парк-отель «PLAZMA»</span>
                <span className='about-hotel__desc'>Парк-отель «Plazma» расположен в городе Донской Тульской области, в 230 км от Москвы. </span>
                <span className='about-hotel__desc'> Место отлично подходит для семейного отдыха на природе, романтических выходных, торжественных и деловых мероприятий,
                  а также для спортивных сборов.</span>
              </div>

              <picture className='about-hotel__img img_min'>
                <img src='/img/index/about-hotel/min.png' alt='' />
              </picture>
            </div>


            <div className='about-hotel__wrapper reverse'>
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
                <img src='/img/index/about-hotel/max.png' alt='' />
              </picture>
            </div>
          </div>

          <div className='page-index__previews preview-blocks' data-scroll-section>



            <div className='preview-blocks__item-wrap'>
              <div className='preview-blocks__item'>

                <div className='preview-blocks__preview-text'>
                  <span className='text-title'>ГОСТИНИЦА</span>
                  <span className='text'>
                    Все наши номера выполнены из качественных материалов, а дизайн был разработан с
                    учетом удобства и современных тенденций. Мы уверены, что у нас вы сможете
                    расслабиться и в полной мере насладиться отдыхом. Наш номерной фонд настолько
                    разнообразен, что каждый сможет найти себе что-то по душе. В гостинице 130 номеров,
                    которые вмещают 400 человек. У нас есть номера на 2,3,4,5,6,7,8 человек, некоторые
                    из них расположены в гостиничных корпусах, а некоторые –отдельные домики с видом на
                    набережную.
                  </span>

                  <Link className='btn btn_black' href='/hotel'>Подробнее</Link>
                </div>
              </div>

              <div className='preview-blocks__item preview-image'>
                <div className='preview-image__img-wrap'>
                  <picture className='preview-image__img' data-scroll data-scroll-speed="-4">
                    <img className='js--mobile-parallax' src="/img/index/previews/2.png" alt='Парк-отель Plazma' />
                  </picture>
                </div>
              </div>
            </div>


            <div className='preview-blocks__item-wrap'>
              <div className='preview-blocks__item'>

                <div className='preview-blocks__preview-text'>
                  <span className='text-title'>ПИТАНИЕ</span>
                  <span className='text'>
                    У нас есть ресторан, столовая SMASH, летний шатер и банкетный зал. Ресторан оформлен
                    в темных коричневых тонах, предлагая укрыться от солнца летом и насладиться уютной
                    обстановкой с камином зимой. Столовая SMASH предлагает быструю и вкусную еду на
                    завтрак, обед, ужин. Летом вы можете насладиться нашими блюдами на свежем воздухе в
                    нашем шатре на полуострове. Для особых мероприятий у нас есть банкетный зал.
                  </span>

                  <Link className='btn btn_black' href='/meals'>Подробнее</Link>
                </div>
              </div>

              <div className='preview-blocks__item preview-image'>
                <div className='preview-image__img-wrap'>
                  <picture className='preview-image__img' data-scroll data-scroll-speed="-4">
                    <img className='js--mobile-parallax' src="/img/index/previews/4.png" alt='Парк-отель Plazma' />
                  </picture>
                </div>
              </div>
            </div>



            <div className='preview-blocks__item-wrap'>
              <div className='preview-blocks__item'>

                <div className='preview-blocks__preview-text'>
                  <span className='text-title'>АКВАТОРИЯ</span>
                  <span className='text'>
                    Территория акватории – это самый настоящий городской курорт. У нас вы сможете
                    насладиться прогулками вдоль набережной, искупаться в большом искусственном водоеме,
                    позагорать на травяном пляже, пожарить шашлыки в беседках, поиграть в волейбол на
                    кварцевом песке, устроить баскетбольный матч на открытой универсальной
                    спорт.площадке, а ваши дети смогут найти друзей со всей России на наших детских
                    площадках. У нас также есть полуостров с бассейном с подогревом и шатром-рестораном,
                    где вы сможете насладиться прохладным аперолем и нежнейшей пиццой.
                  </span>

                  <Link className='btn btn_black' href='/aquatory'>Подробнее</Link>
                </div>
              </div>

              <div className='preview-blocks__item preview-image'>
                <div className='preview-image__img-wrap'>
                  <picture className='preview-image__img' data-scroll data-scroll-speed="-4">
                    <img className='js--mobile-parallax' src="/img/index/previews/3.png" alt='Парк-отель Plazma' />
                  </picture>
                </div>
              </div>
            </div>

            <div className='preview-blocks__item-wrap'>
              <div className='preview-blocks__item'>
                <div className='preview-blocks__preview-text'>
                  <span className='text-title'>САУНА</span>
                  <span className='text'>
                    На территории отеля есть 3 отдельных бани на дровах со своими особенностями.
                    «Аква-люкс» предлагает большой бассейн с зоной джакузи и просторную комнату отдыха.
                    «1000 и 1 ночь» удивит вас восточным дизайном, расслабляющим хамамом и соляной
                    стеной в русской парилке. «Белая ночь» – это светлые тона и теплый камень, на
                    котором можно делать пенный массаж.
                  </span>

                  <Link className='btn btn_black' href='/sauna'>Подробнее</Link>
                </div>
              </div>

              <div className='preview-blocks__item preview-image'>
                <div className='preview-image__img-wrap'>
                  <picture className='preview-image__img' data-scroll data-scroll-speed="-4">
                    <img className='js--mobile-parallax' src="/img/index/previews/5.png" alt='Парк-отель Plazma' />
                  </picture>
                </div>
              </div>
            </div>


            <div className='preview-blocks__item-wrap'>
              <div className='preview-blocks__item'>
                <div className='preview-blocks__preview-text'>
                  <span className='text-title'>МЕРОПРИЯТИЯ</span>
                  <span className='text'>
                    У нас есть множество мест для проведения различных мероприятий.. В ресторане можно
                    провести выпускной, в банкетном зале – свадьбу, в шатре – юбилей, в беседках –
                    детский день рождения, в конференц-зале – тимбилдинг, на травяном пляже – групповые
                    занятия по йоге. У нас также есть 5 спортивных объектов, которые могут стать
                    площадками для спортивных мероприятий.
                  </span>

                  <Link className='btn btn_black' href='/events'>Подробнее</Link>
                </div>
              </div>

              <div className='preview-blocks__item preview-image'>
                <div className='preview-image__img-wrap'>
                  <picture className='preview-image__img' data-scroll data-scroll-speed="-4">
                    <img className='js--mobile-parallax' src='/img/index/previews/7.png' alt='Парк-отель Plazma' />
                  </picture>
                </div>
              </div>
            </div>

            <div className='preview-blocks__item-wrap'>
              <div className='preview-blocks__item'>
                <div className='preview-blocks__preview-text'>
                  <span className='text-title'>АКТИВНЫХ ОТДЫХ</span>
                  <span className='text'>
                    Парк-отель &quot;Plazma&quot; предлагает множество возможностей для активного отдыха.
                    Разомнитесь на теннисном корте или в универсальном спортивном зале. Насладитесь
                    пляжными видами спорта на крытых или открытых площадах. Пользуйтесь тренажерами под
                    открытым небом и наслаждайтесь свежим воздухом. У нас также есть две универсальные
                    спортивные площадки на улице с покрытием из резиновой крошки, где вы можете
                    заниматься любимым спортом. Ну и, конечно, наша набережная 500 метром отлично
                    подходит для утренней пробежки, велосипеда или самоката.
                  </span>
                  {/* 
                        <!-- <div className='btn btn_black'>Подробнее</div> --> */}
                </div>
              </div>

              <div className='preview-blocks__item preview-image'>
                <div className='preview-image__img-wrap'>
                  <picture className='preview-image__img' data-scroll data-scroll-speed="-4">
                    <img className='js--mobile-parallax' src="/img/index/previews/6.png" alt='Парк-отель Plazma' />
                  </picture>
                </div>
              </div>
            </div>
          </div>


          <div className='page-index__geo index-geo container' data-scroll-section>
            <div className='index-geo__map'>
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A0188186de97a445d0d506425f4fd40ce6840238ccefe968d6d2b153b1b53cc45&amp;source=constructor"
                width="100%" height="500" frameBorder="0"></iframe>
            </div>

            <div className='index-geo__feed'>
              <span className='index-geo__title'>местонахождение</span>

              <span className='index-geo__text'>Тульская область, г. Донской, ул. Герцена, д. 14</span>

              {/* <div className='btn btn_black index-geo__btn'>Как до нас добраться</div> */}
            </div>
          </div>


        </div >
        <Footer />
      </main>
    </>

  )
}
