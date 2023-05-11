import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types"

import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/SponsorRedBullt.png'
import SponsorForbes from '@/assets/SponsorForbest.png'
import SponsorFortune from '@/assets/SponsorFortune.png'


type Props = {
    setSelectedPage: ( value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    
    return (
        <section
            id="home"
            className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
        >
            {/* Image and main header */}
            <div>
                {/* main header */}
                <div>
                    {/* headings */}
                    <div>
                        <div>
                            <div>
                                <img alt="home-page-text" src={HomePageText}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </section>
    )
}

export default Home