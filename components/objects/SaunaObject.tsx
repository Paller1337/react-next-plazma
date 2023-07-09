import toast, { Toaster } from 'react-hot-toast';
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

    const copyNumber = (x: string) => {
        navigator.clipboard.writeText(x)
        toast.success('Номер скопирован', {
            duration: 3000,
            style: {
                fontSize: 15,
                borderRadius: 0,
                border: '1px solid #393939',
                padding: '12px 18px'
            },
            position: 'top-center'
        });
    }
    return (<>
        <Toaster />
        <div key={data.id.toString()} id={data.id} className='page-saunas__sauna-info text-section text-section_med separator-after' data-scroll-section>
            <div className='big-p big-p_border-top container'>
                <span className='big-p__title'>{data.name}</span>
                <span className='big-p__desc' dangerouslySetInnerHTML={{ __html: data.description }}></span>

                <div className='big-p__attr'>
                    <span className='big-p__attr-title'>Стоимость:</span>
                    <div className='big-p__attr-desc'>
                        {data.price.map((x, i) => <span key={i}> {x} </span>)}
                    </div>
                </div>

                <div className='big-p__attr'>
                    <span className='big-p__attr-title'>Вместимость:</span>
                    <div className='big-p__attr-desc' dangerouslySetInnerHTML={{ __html: data.aboutSize }}>
                        {/* <span>{}</span> */}
                    </div>
                </div>

                {/* // < !-- < span className = 'dotted-text' > Стоимость: 1600 руб / час</span > --> */}

            </div>

            <PlazmaSlider data={data.sliderData} />
            {/* <a className='popover pop-right' href='tel: +790000000' popover-data={'+7 (900) 900-00-00'} /> */}

            <div className='btn-container btn-container_go-up'>
                <a className='btn btn_black popover pop-top'
                    // href='tel: +790000000' 
                    popover-data={'+7 (930) 897-77-01'}
                    onClick={() => copyNumber('+79308977701')}
                >
                    Забронировать
                </a>
            </div>
        </div >

    </>)
}