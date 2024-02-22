/* eslint-disable no-irregular-whitespace */
import type { FormEvent } from 'react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Button from '@/components/ant/button/button';
import BackgroundImage from '@/assets/images/ornament.svg';
import CodeSnippetAnimation from '@/components/codeSnippetAnimation';

import ChevronBlack from '@/assets/icons/chevronBlack.svg';

import RenaultLogo from '@/assets/renault-logo.png';

import PalantirLogo from '@/assets/palantir_white.png';
// import BlackRockLogo from '@/assets/vc/white/blackRock.png';
import ImperialLogo from '@/assets/imperial_logo.png';
// import FacultyCapitalLogo from '@/assets/vc/white/facultyCapital.png';
// import GoCardlessLogo from '@/assets/vc/white/gocar.png';
import OxfordLogo from '@/assets/oxford_logo.png';
import OutsizedVCLogo from '@/assets/vc/white/outvc.png';
import SeedCampLogo from '@/assets/vc/white/seed.png';
// import SongKickLogo from '@/assets/vc/white/songkick.png';
import YCLogo from '@/assets/y_combinator.jpeg';
import Sw3 from '@/assets/vc/white/sw3.png';
// import EntrepreneurFirstLogo from '@/assets/vc/white/entrepreneurFirst.png';
// import animationIphoneGif from '@/assets/animation-iphone.gif';


import TextTransition, { presets } from 'react-text-transition';

import MobileSnippets from '@/assets/images/mobileView.png';

import Image from 'next/image';
import { gaActions, gaCategories, gaEvent } from '@/utils/ga';
import styles from './hero.module.scss';
import error from 'next/error';

type FormElements<U extends string> = HTMLFormControlsCollection &
  Record<U, HTMLInputElement>;

const code1 = `import inferex as ix
import torchvision.models as models

@ix.pipeline(http=True, sync=False)
def classify(
  image: np.ndarray,
  model: ix.Depends(models.resnet34, pretrained=True)
) -> dict:
  predictions = model(x)
  labels = model.labels[str(y.max(1))][1]
  return {
    "predictions": predictions,
    "labels": labels
  }
`;

const code2 = `$ inferex deploy --local .
🐳 Building your project         100%|████████| 12/12
🚀 Launching workers & replicas  100%|████████| 2/2
🕒 Waiting for deployment to come online [00:33] (next is register)
🔓 Authentication is disabled
📦 Registering pipelines: ✅ classify
🎉 Deployment healthy, see: 🔗 http://localhost:8080/docs

$ curl -X POST localhost:8080/classify -F "image=@chihuahua.jpg"
{
  "predictions": [0.9, 0.1],
  "labels": "dog"
}
`;

const trustedList = [
  { logo: PalantirLogo, name: 'Palantir' },
  { logo: RenaultLogo, name: 'UN' },
  { logo: ImperialLogo, name: 'Imperial' },
  { logo: OxfordLogo, name: 'Oxford' },
  { logo: YCLogo, name: 'YC' },
  // { logo: OutsizedVCLogo, name: '' },
  // { logo: SeedCampLogo, name: 'Seedcamp' },
  // { logo: Sw3, name: 'Sw3' },
  // { logo: BlackRockLogo, name: 'Black Rock' },
  // { logo: FacultyCapitalLogo, name: 'Faculty AI' },
  // { logo: GoCardlessLogo, name: 'Go Cardless' },
  // { logo: SongKickLogo, name: 'Songkick' },
  // { logo: EntrepreneurFirstLogo, name: 'Entrepreneur First' },
];

const Hero = () => {
  const router = useRouter();
  const [startTyping, setStartTyping] = useState(false);
  const [startSecond, setStartSecond] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState({ error: false, message: '' });
  const [loading, setLoading] = useState(false);
  const [showMobileAnimation, setShowMobileAnimation] = useState(false);

  const [indexChangingTitle, setIndexChangingTitle] = React.useState(0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return;

    // Prevent filling name by bots. Input name is hidden
    const elements = e.currentTarget.elements as FormElements<'email' | 'name'>;
    if (elements.name.value) return;
    setError({ error: false, message: '' });

    setLoading(true);

    gaEvent({
      action: gaActions.waitlistSubmit,
      category: gaCategories.forms,
    });

    setLoading(false);

    fetch('/api/add-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((data) => {
        const { status } = data;
        switch (status) {
          case 201:
            router.push('/thank-you');
            break;
          case 429:
            setError({
              error: true,
              message: 'Too many requests. Please try again later.',
            });
            break;
          default:
            setError({
              error: true,
              message: 'Something went wrong. Please try again later. ',
            });
            break;
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // index for changing title
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndexChangingTitle((indexChangingTitle) => indexChangingTitle + 1),
      2000, // every 1 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1400) {
      setShowMobileAnimation(true);
    }
    function handleResize() {
      if (window.innerWidth < 1400) {
        setShowMobileAnimation(true);
      } else {
        setShowMobileAnimation(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (startTyping) {
      gaEvent({
        action: gaActions.waitlistStartTyping,
        category: gaCategories.forms,
      });
    }
  }, [startTyping]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (e.target.value) {
      setStartTyping(true);
    }
  };

  
  // const TEXTS = [
  //   "Voltage Mismatch",
  //   "Protocol Mismatch",
  //   "Power Specs",
  //   "Mechanical Fit",
  //   "Software Mismatch",
  //   "Connector Mismatch",
  //   "Thermal Management"
  // ];

  // const TEXTS2 = [
  //   "software",
  //   "hardware",
  //   "firmware"
  // ];

  const TEXTS = [
    "hardware incompatibility",
    "software incompatibility",
    "firmware versioning",
    "cross-team discord",
    "documentation searching",
    "connector disparity",
    "internal misalignment",
    "protocol incompatibility",
    "documentation reading",
    "thermal incompatibility",
    "mechanical misfit",
    "power supply mismatch",
    // "motors"
    // "screws"
    ];
  

  return (
    <div className={styles.outer}>
      <img
        className={`basicBackgroundImage ${styles.backgroundImage}`}
        src={BackgroundImage.src}
        alt=""
        role="presentation"
      />
      <div className={`containerBig ${styles.inner}`}>
        <div className={styles.textInner}>

          <h1 className={styles.title}>
            {/* Intelligent ALM for large mechanics teams */}

          {/* compatibility
          large teams
          mechanics
          knowledge
          central */}

          {/* Intelligent knowledge hubs tailored to mechanics team */}
          The end of
          {" "}
          <TextTransition translateValue="20%" direction={"down"} inline={true} springConfig={presets.wobbly}> {TEXTS[indexChangingTitle % TEXTS.length]}</TextTransition>
          {" "} nightmares
          </h1>
          <h2 className={styles.subtitle}>
          Leverage our AI knowledge hub to avoid component incompatibilities & keep your teams aligned, from design, AI, automation and more.

            {/* Save hours of doc reading, prevent dozens of development mistakes, by using our intelligent compability between every components of robotic systems. */}
          </h2>



          {/* <form className={styles.formWrap} onSubmit={handleSubmit}> */}
          <Button variant="cta" size="medium" type="submit" onClick={()=>{window.location.replace('https://zcal.co/remymess/asymmetrictext')}}>
                {loading ? (
                  <span className={styles.loader}></span>
                ) : (
                  <>
                    {/* <a href="https://bobbyhadz.com" target="_blank" rel="noreferrer"></a> */}
                      <span>Book a demo!</span>
                    {/* <a/> */}
                  </>
                )}
              </Button>


            {/* <input className={styles.hidden} name="name" tabIndex={-1} />
            <input
              type="email"
              required={true}
              placeholder="Enter your email"
              className={styles.input}
              onChange={(e) => handleEmailChange(e)}
              onFocus={() => setError({ error: false, message: '' })}
            /> */}
            {/* <div className={styles.absButton}> */}
              {/* <Button variant="cta" size="medium" type="submit">
                {loading ? (
                  <span className={styles.loader}></span>
                ) : (
                  <span>Book a demo</span>
                )}
              </Button> */}
            {/* </div> */}
            {error.error && <p className={styles.error}>{error.message}</p>}
          {/* </form> */}
        </div>

        {/* <div className={styles.imageWrapper}> */}
        <div className={styles.imageWrapper}>

{   /*   THIS CODE WAS FOR THE TERMINAL FROM INFEREX
          <div
            className={`${styles.imageInner1} ${
              startSecond && styles.imageInnerMoved
            }`}
            data-aos="fade-left"
          >
            <CodeSnippetAnimation
              snippet={code1}
              language="python"
              showLineNumber={false}
              onEnd={() => {
                if (showMobileAnimation) {
                  setStartSecond(true);
                }
              }}
              child={
                <div className={styles.deployBtn}>
                  <Button onClick={() => setStartSecond(true)} size="menu">
                    <span>Deploy</span>
                    <img src={ChevronBlack.src} alt="" role="presentation" />
                  </Button>
                </div>
              }
            />
          </div>

          
          {startSecond && (
            <div className={styles.imageInner2} data-aos="fade-left">
              <CodeSnippetAnimation
                snippet={code2}
                showLineNumber={false}
                language="bash"
                type="block"
                start={startSecond}
                child={
                  <div className={styles.deployBtn}>
                    <Button onClick={() => setStartSecond(false)} size="menu">
                      <span>Start over</span>
                      <img src={ChevronBlack.src} alt="" role="presentation" />
                    </Button>
                  </div>
                }
              />
            </div>
          )}


          <div className={styles.mobileSnippet}>
            <Image
              src={MobileSnippets}
              alt=""
              placeholder="blur"
              role="presentation"
              blurDataURL={MobileSnippets.blurDataURL}
              width={MobileSnippets.width}
              height={MobileSnippets.height}
              priority={true}
            />
          </div> */}

          <img src={"animation-iphone.gif"} style={{borderRadius: "35px", height: "100%", marginLeft: "auto", marginRight: "auto"}} alt="my-gif" />

        </div>
      </div>

      <div className={styles.logosOuter}>
        <div className={`containerBig`}>
          <h3>Trusted by:</h3>
          <div className={styles.logosWrap}>
            {trustedList.map((v, index) => (
              <Image
                src={v.logo.src}
                alt={v.name}
                key={v.name}
                width={v.logo.width}
                height={v.logo.height}
                placeholder="blur"
                blurDataURL={v.logo.blurDataURL}
                priority={true}
                data-aos="fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
        {/* <div className={`containerBig`}>
          <h3>Community members from:</h3>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
