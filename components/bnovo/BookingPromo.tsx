import { useEffect, useContext, useRef, useState } from 'react';
import { BnovoContext } from './bnovoContext';
declare var Bnovo_Widget: any



export default function BookingPromo(props: any) {
    const [bookingLoaded, setBookingLoaded] = useState(false)
    const { bnovoIsLoad } = useContext(BnovoContext)
    const bnovoPromoRef = useRef(null)



    useEffect(() => {
        if (bnovoIsLoad && !bookingLoaded) {
            (function () {
                Bnovo_Widget.init(function () {
                    setBookingLoaded(true)
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

            const bnovoPromo = document.getElementById('bnovoPromo') as HTMLElement
            // if (bnovoPromo && bnovoPromo.parentElement) {
            //     const newPosition = () => {
            //         const parentElement = bnovoPromo.parentElement;
            //         if (parentElement) {
            //             const parentHeight = parentElement.clientHeight;
            //             const promoHeight = bnovoPromo.clientHeight;
            //             const promoTop = bnovoPromo.offsetTop;
            //             const windowHeight = window.innerHeight;

            //             if (promoTop + promoHeight > parentHeight) {
            //                 bnovoPromo.style.top = `${parentHeight - promoHeight}px`;
            //             } else if (windowHeight < 700) {
            //                 bnovoPromo.style.top = `${windowHeight - 100 - promoHeight}px`;
            //             }
            //         }
            //     };

            //     window.addEventListener('resize', newPosition);

            //     bnovoPromo.addEventListener('click', () => {
            //         bnovoPromo.addEventListener('transitionend', newPosition);

            //         return () => bnovoPromo.removeEventListener('transitionend', newPosition);
            //     });

            //     const resizeObserver = new ResizeObserver(newPosition);

            //     resizeObserver.observe(bnovoPromo);
            // }


            // if (bnovoPromo) {
            //     const newPosition = (h: number) => {
            //         if (bnovoPromo.clientHeight < window.innerHeight - 100) {
            //             if (window.innerHeight < 700)
            //                 bnovoPromo.style.top = `${window.innerHeight - h - 40}px`
            //             else if (window.innerHeight > 700 && window.innerWidth > 1000)
            //                 bnovoPromo.style.top = `${window.innerHeight - h - 240}px`
            //             else
            //                 bnovoPromo.style.top = `${420}px`
            //         }
            //     }

            //     window.addEventListener('resize', () => {
            //         newPosition(bnovoPromo.clientHeight)
            //     })

            //     bnovoPromo.addEventListener('click', () => {
            //         bnovoPromo.addEventListener('transitionend', () => newPosition(bnovoPromo.clientHeight))

            //         return () => bnovoPromo.removeEventListener('transitionend', () => newPosition(bnovoPromo.clientHeight))
            //     })


            //     const resizeObserver = new ResizeObserver(entries => {
            //         for (const entry of entries) {
            //             const target = entry.target;
            //             const { width, height } = target.getBoundingClientRect();
            //             newPosition(height)
            //         }
            //     });

            //     resizeObserver.observe(bnovoPromo);
            // }
        }

    });


    useEffect(() => {
        if (bnovoPromoRef.current) {
            const bnovoBlock = bnovoPromoRef.current as HTMLDivElement

            const handleClick = (e: MouseEvent) => {
                if (bnovoBlock && e.target instanceof Node) {
                    if (bnovoBlock.contains(e.target)) {
                        bnovoBlock.classList.add('bnovo-target');
                    } else {
                        bnovoBlock.classList.remove('bnovo-target');
                    }
                }
            };

            document.addEventListener('click', handleClick);

            return () => {
                document.removeEventListener('click', handleClick);
            };
        }
    }, []);


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