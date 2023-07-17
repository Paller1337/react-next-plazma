import Image, { StaticImageData } from 'next/image'

type priceCardSize = 'min' | 'med'

export interface AquatoryObjectProps {
    id: string,
    title: string,
    description: string,
    images: StaticImageData[] | string[],
    priceCards: {
        cardName: string,
        cardAttr: string,
        cardPrice: string | number,
        cardSize: priceCardSize
    }[],
    attentionText?: string,
    includedItems: string[],

    includedImg: StaticImageData | string,
    additionalItems: string[],
    additionalText?: string
}


export default function AquatoryObject(data: AquatoryObjectProps) {
    return (<>
        <div id={data.id} className='page-aquatory__object aquatory-object separator-after' data-scroll-section>

            <div className='text-section text-section_big'>
                <span className='h2-title'>{data.title}</span>
                <span className='text'>
                    {data.description}
                </span>
            </div>

            <div className='aquatory-object__photos'>
                {data.images.map((x, i) =>
                    <picture key={i} className='aquatory-object__img'>
                        {/* <Image height={470} width={570} src={x} alt='' placeholder='blur' /> */}
                        <Image height={470} width={570} src={x} alt='' />
                    </picture>
                )}
            </div>

            <div className='aquatory-object__price'>
                {data.additionalText ?
                    <div className='aquatory-object__attention'>
                        <span className='text'>
                            {data.additionalText}
                        </span>
                    </div>
                    : ''}
                    
                <span className='text-normal'>Стоимость посещения</span>

                <div className='price-card__wrapper'>
                    {data.priceCards.map((x, i) =>
                        <div key={i} className={`price-card__item card_${x.cardSize}`}>
                            <span className='card-name'>{x.cardName}</span>
                            <span className='card-attr separator-after'>{x.cardAttr}</span>
                            <span className='card-price'>{x.cardPrice}</span>
                        </div>
                    )}
                </div>

                {data.attentionText ? <span className='attention'>{data.attentionText}</span> : ''}
            </div>

            <div className='aquatory-object__include'>
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
                    <Image height={420} width={320} src={data.includedImg} alt='' />
                </picture>
            </div>


        </div >
    </>)
}