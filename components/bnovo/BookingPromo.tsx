import { useEffect, useContext, useRef, useState } from 'react';
import { BnovoContext } from './bnovoContext';
declare var Bnovo_Widget: any



export default function BookingPromo(props: any) {
    const [bookingLoaded, setBookingLoaded] = useState(false)
    const { bnovoIsLoad } = useContext(BnovoContext)
    const bnovoPromoRef = useRef(null)
    const [firstLoad, setFirstLoad] = useState(true)

    const [bnovoIsTarget, setBnovoIsTarget] = useState(false)

    const bnovoInit = () => {
        if (firstLoad) {
            loadBnovo()
        } else {
            if (!bnovoIsTarget) {
                deleteBnovo()
                loadBnovo()
            }
        }
    }

    const loadBnovo = () => {
        (function () {
            Bnovo_Widget.init(function () {
                setBookingLoaded(true)
                setFirstLoad(false)
                Bnovo_Widget.open('_bn_widget_', {
                    type: "horizontal",
                    uid: "d6ca513a-aef2-4aff-a639-9a3d1e3e692c",
                    lang: "ru",
                    width: "100%",
                    width_mobile: "300",
                    background: "#ffffff",
                    background_mobile: "#ffffff",
                    bg_alpha: "0",
                    bg_alpha_mobile: "0",
                    border: "on",
                    border_color: "#ffffff",
                    border_color_mobile: "#C6CAD3",
                    padding: "20",
                    padding_mobile: "24",
                    border_radius: "0",
                    font_type: "times_new_roman",
                    without_title: "on",
                    without_title_mobile: "on",
                    title_color: "#242742",
                    title_color_mobile: "#242742",
                    title_size: "22",
                    title_size_mobile: "22",
                    inp_color: "#393939",
                    inp_bordhover: "#393939",
                    inp_bordcolor: "#ffffff",
                    inp_alpha: "100",
                    btn_background: "#ffffff",
                    btn_background_over: "#ffffff",
                    btn_textcolor: "#393939",
                    btn_textover: "#393939",
                    btn_bordcolor: "#ffffff",
                    btn_bordhover: "#393939",
                    adults_default: "1",
                    cancel_color: "#FFFFFF",
                    switch_mobiles: "on",
                    switch_mobiles_width: "800",
                });
            });
        })();
    }


    const deleteBnovo = () => {
        if (bnovoPromoRef.current && bookingLoaded) {
            const bnovo = bnovoPromoRef.current as HTMLElement
            const delContainer = bnovo.querySelector('#_bn_widget_')
            const delElement = delContainer?.getElementsByTagName('div')[0]
            if (delElement) {
                delElement.remove()
            }
        }
    }

    useEffect(() => {
        if (bnovoIsLoad && !bookingLoaded) {
            loadBnovo()
        }
    }, [bnovoIsLoad, bookingLoaded]);


    useEffect(() => {
        if (bnovoPromoRef.current) {
            const bnovoBlock = bnovoPromoRef.current as HTMLDivElement

            const handleDelete = (e: MouseEvent) => {
                if (bnovoBlock) {
                    const handleTarget = () => {
                        if (e.target instanceof Node) {
                            setBnovoIsTarget(true)

                            if (document.contains(e.target) && !bnovoBlock.contains(e.target)) {
                                console.log('target', bnovoIsTarget)
                                if (bnovoIsTarget) {
                                    bnovoInit()
                                }
                            }
                        }
                    }

                    bnovoBlock.addEventListener('click', handleTarget)
                    return () => {
                        bnovoBlock.removeEventListener('click', handleTarget);
                    };
                }

            };

            document.addEventListener('click', handleDelete);

            return () => {
                document.removeEventListener('click', handleDelete);
            };
        }
    }, [bnovoPromoRef.current]);


    return (<>
        <div ref={bnovoPromoRef} id='bnovoPromo' className={`main__promo-bnovo `}>
            <div className="left" id="_bn_widget_">
                {/* <!-- <a href="https://bnovo.ru/" id="_bnovo_link_" target="_blank">Bnovo</a> --> */}
            </div>
        </div>
    </>)
}




// export const RestPromo = () => {
//     return (`
//         <>
//             <div class='btn__wrapper'>
//                 <div class='btn btn_white'>Кнопка</div>
//             </div>
//         </>
//     `)
// }

// export const DefPromo = () => {
//     return (`
//         <>
//             <div class='btn__wrapper'>
//             </div>
//         </>
//     `)
// }