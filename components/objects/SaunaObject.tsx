import PlazmaSlider from '../PlazmaSlider';


export interface SaunaObjectProps {
    id: string,
    name: string,
    description: string,
    price: string[],
    aboutSize: string,
    sliderData: string,

}
export default function SaunaObject(data: SaunaObjectProps) {

    return (<>

        <div key={data.id.toString()} className='page-saunas__sauna-info text-section text-section_med separator-after' data-scroll-section>
            <div className='big-p big-p_border-top container'>
                <span className='big-p__title'>{data.name}</span>
                <span className='big-p__desc' dangerouslySetInnerHTML={{__html: data.description}}></span>

                <div className='big-p__attr'>
                    <span className='big-p__attr-title'>Стоимость:</span>
                    <div className='big-p__attr-desc'>
                        {data.price.map((x, i) => <span key={i}> {x} </span>)}
                    </div>
                </div>

                <div className='big-p__attr'>
                    <span className='big-p__attr-title'>Вместимость:</span>
                    <div className='big-p__attr-desc' dangerouslySetInnerHTML={{__html: data.aboutSize}}>
                        {/* <span>{}</span> */}
                    </div>
                </div>

                {/* // < !-- < span className = 'dotted-text' > Стоимость: 1600 руб / час</span > --> */}

            </div>

            <PlazmaSlider data={data.sliderData} />

            <div className='btn-container btn-container_go-up'>
                <div className='btn btn_black'>Забронировать</div>
            </div>
        </div >

    </>)
}