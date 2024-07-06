import vkCloudLoader from '@/mw/utils/imageLoader'
import { DEFAULTS } from 'defaults'
import Image, { StaticImageData } from 'next/image'
import { ReactSVG } from 'react-svg'

type priceCardSize = 'min' | 'med'

export interface AquatoryObjectProps {
    id: string,
    title: string,
    description: string,
    images: StaticImageData[] | string[],
    priceTitleAdditional?: string,
    priceCards: {
        cardName: string,
        cardAttr: string,
        cardPrice: string | number,
        cardSize: priceCardSize
    }[],
    attentionText?: string,
    warningText?: string,
    includedItems: string[],

    includedImg: StaticImageData | string,
    additionalItems: string[],
    additionalText?: string
}


export default function AquatoryObject(data: AquatoryObjectProps) {
    return (<>
        <div id={data.id} className='page-aquatory__object aquatory-object separator-after' data-scroll-section
            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>

            <div className='text-section text-section_big'
                data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                <span className='h2-title'>{data.title}</span>
                <span className='text'>
                    {data.description}
                </span>
            </div>

            <div className='aquatory-object__photos'
                data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                {data.images.map((x, i) =>
                    <picture key={i} className='aquatory-object__img'>
                        {/* <Image height={470} width={570} src={x} alt='' placeholder='blur' /> */}
                        <Image height={470} width={570} src={x} alt='' loader={vkCloudLoader} />
                    </picture>
                )}
            </div>

            <div className='aquatory-object__price'
                data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                {data.additionalText ?
                    <div className='aquatory-object__attention'>
                        <span className='text' dangerouslySetInnerHTML={{ __html: data.additionalText }}>
                            {/* {} */}
                        </span>
                    </div>
                    : ''}

                <span className={`text-normal`} style={data.priceTitleAdditional ? { paddingBottom: '0px' } : {}}>Стоимость посещения</span>
                {data.priceTitleAdditional ? <span className='attention' dangerouslySetInnerHTML={{ __html: data.priceTitleAdditional }}></span> : ''}

                <div className='price-card__wrapper'>
                    {data.priceCards.map((x, i) =>
                        <div key={i} className={`price-card__item card_${x.cardSize}`}>
                            <span className='card-name'>{x.cardName}</span>
                            <span className='card-attr separator-after'>{x.cardAttr}</span>
                            <span className='card-price'>{x.cardPrice}</span>
                        </div>
                    )}
                </div>

                {data.attentionText ? <span className='attention' dangerouslySetInnerHTML={{ __html: data.attentionText }}></span> : ''}
                {data.warningText ? <span className='warning' dangerouslySetInnerHTML={{ __html: data.warningText }}></span> : ''}
            </div>

           {/*} {data.id === 'pen' ?
                <div className='aquatory-object__ad-pen'>
                    <h3 className='heading'>Взрослая пятница 16+</h3>
                    <span className='text'>
                        Теперь у нас появился день, который можно посвятить себе и комфортно отдохнуть.
                        Каждую пятницу – взрослый день, то есть вход в зону полуострова с бассейном возможен
                        <span className='text red'> только для гостей старше 16 лет. </span>
                    </span>
                    <ReactSVG src='/svg/coctail-circle-traced.svg' className='coclail-circle-traced' />
                </div>
                : <></>}
*/}
            <div className='aquatory-object__include'
                data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                <div className='aquatory-object__include-info'>
                    <div className='page-aquatory__list'>
                        <span className='page-aquatory__list-title'>Включено:</span>
                        <ul>
                            {data.includedItems.map((x, i) =>
                                <li key={i} className='page-aquatory__list-item'>{x}</li>
                            )}
                        </ul>
                    </div>

                    <div className='page-aquatory__list'>
                        <span className='page-aquatory__list-title'>Дополнительно:</span>
                        <ul>
                            {data.additionalItems.map((x, i) =>
                                <li key={i} className='page-aquatory__list-item'>{x}</li>
                            )}
                        </ul>
                    </div>
                </div>

                <picture className='aquatory-object__include-img'>
                    {/* <Image height={420} width={320} src={data.includedImg} alt='' placeholder='blur' /> */}
                    <Image height={420} width={320} src={data.includedImg} alt='' loader={vkCloudLoader} />
                </picture>
            </div>


        </div >
    </>)
}