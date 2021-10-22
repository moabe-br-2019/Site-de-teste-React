import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard3 from '../components/feature-card3'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Site de teste</title>
        <meta property="og:title" content="Site de teste" />
      </Helmet>
      <header className={styles['Header']}>
        <img
          alt="logo"
          src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
          className={styles['image']}
        />
        <nav className={styles['Nav']}>
          <span>About</span>
          <span className={styles['text001']}>Features</span>
          <span className={styles['text002']}>Pricing</span>
          <span className={styles['text003']}>Team</span>
          <span className={styles['text004']}>Blog</span>
        </nav>
        <div className={styles['IconGroup']}>
          <svg viewBox="0 0 950.8571428571428 1024" className={styles['icon']}>
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className={styles['icon02']}
          >
            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
          </svg>
          <svg
            viewBox="0 0 602.2582857142856 1024"
            className={styles['icon04']}
          >
            <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
          </svg>
        </div>
        <svg viewBox="0 0 1024 1024" className={styles['icon06']}>
          <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
      </header>
      <div className={styles['Hero']}>
        <div className={styles['container01']}>
          <h1 className={styles['text005']}>
            Let&apos;s keep things organised
          </h1>
          <span className={styles['text006']}>
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
          <button
            className={` ${styles['button']} ${projectStyles['button']} `}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className={styles['Banner']}>
        <h1 className={styles['text013']}>Our Mission</h1>
        <span className={styles['text014']}>
          <span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
              dignissim tortor. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi
              ut rhoncus. Integer in dignissim tortor. Sed non volutpat turpis.
              Mauris luctus rutrum mi ut rhoncus. Integer in dignissim ortor.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </span>
        <button className={` ${styles['button1']} ${projectStyles['button']} `}>
          Read More
        </button>
      </div>
      <div className={styles['Steps']}>
        <h1 className={styles['text018']}>
          <span>Discover Our Process</span>
        </h1>
        <span className={styles['text020']}>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          <br></br>
          <span></span>
        </span>
        <div className={styles['container02']}>
          <div className={styles['Step']}>
            <div className={styles['container03']}>
              <div className={styles['Line']}></div>
              <div className={styles['container04']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon08']}>
                  <path d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
                </svg>
              </div>
              <div className={styles['Line1']}></div>
            </div>
            <div className={styles['container05']}>
              <h1 className={styles['text023']}>
                <span>Ideate</span>
              </h1>
              <span className={styles['text025']}>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
          <div className={styles['Step1']}>
            <div className={styles['container06']}>
              <div className={styles['Line2']}></div>
              <div className={styles['container07']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon10']}>
                  <path d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"></path>
                </svg>
              </div>
              <div className={styles['Line3']}></div>
            </div>
            <div className={styles['container08']}>
              <h1 className={styles['text028']}>
                <span>Design</span>
              </h1>
              <span className={styles['text030']}>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
          <div className={styles['Step2']}>
            <div className={styles['container09']}>
              <div className={styles['Line4']}></div>
              <div className={styles['container10']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon12']}>
                  <path d="M576 736l96 96 320-320-320-320-96 96 224 224z"></path>
                  <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
                </svg>
              </div>
              <div className={styles['Line5']}></div>
            </div>
            <div className={styles['container11']}>
              <h1 className={styles['text033']}>
                <span>Develop</span>
              </h1>
              <span className={styles['text035']}>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
          <div className={styles['Step3']}>
            <div className={styles['container12']}>
              <div className={styles['Line6']}></div>
              <div className={styles['container13']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon15']}>
                  <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
                </svg>
              </div>
              <div className={styles['Line7']}></div>
            </div>
            <div className={styles['container14']}>
              <h1 className={styles['text038']}>
                <span>Deploy</span>
              </h1>
              <span className={styles['text040']}>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['Pricing']}>
        <div className={styles['container15']}>
          <div className={styles['PricingCard']}>
            <span className={styles['text043']}>Free</span>
            <div className={styles['container16']}>
              <span className={styles['text044']}>
                <span>$</span>
                <span></span>
              </span>
              <span className={styles['text047']}>0</span>
            </div>
            <div className={styles['container17']}>
              <span className={styles['text048']}>
                <span>â Full access to design tool</span>
              </span>
              <span className={styles['text050']}>
                <span>â Publish with Teleport</span>
              </span>
              <span className={styles['text052']}>
                <span>â Subdomain publish</span>
              </span>
              <span className={styles['text054']}>
                <span>â Download code</span>
              </span>
            </div>
            <button
              className={` ${styles['button2']} ${projectStyles['button']} `}
            >
              Learn More
            </button>
          </div>
          <div className={styles['PricingCard1']}>
            <span className={styles['text056']}>basic</span>
            <div className={styles['container18']}>
              <span className={styles['text057']}>
                <span>$</span>
                <span></span>
              </span>
              <span className={styles['text060']}>9</span>
              <span className={styles['text061']}>
                <span>/ monthly</span>
              </span>
            </div>
            <span className={styles['text063']}>
              <span>Billed annualy or $12 month-to-month.</span>
              <span></span>
            </span>
            <div className={styles['container19']}>
              <span className={styles['text066']}>
                <span>â All features of FREE plan</span>
              </span>
              <span className={styles['text068']}>
                <span>â Connect to custom domains</span>
              </span>
              <span className={styles['text070']}>
                <span>â Private projects</span>
              </span>
              <span className={styles['text072']}>
                <span>â No project limitations</span>
              </span>
              <span className={styles['text074']}>
                <span>â Unlimited collabotators</span>
              </span>
            </div>
            <button
              className={` ${styles['button3']} ${projectStyles['button']} `}
            >
              Learn More
            </button>
          </div>
          <div className={styles['PricingCard2']}>
            <span className={styles['text076']}>Pro</span>
            <div className={styles['container20']}>
              <span className={styles['text077']}>
                <span>$</span>
                <span></span>
              </span>
              <span className={styles['text080']}>29</span>
              <span className={styles['text081']}>
                <span>/ monthly</span>
              </span>
            </div>
            <span className={styles['text083']}>
              <span>Billed annualy or $32 month-to-month.</span>
              <span></span>
            </span>
            <div className={styles['container21']}>
              <span className={styles['text086']}>
                <span>â All features of BASIC plan</span>
              </span>
              <span className={styles['text088']}>
                <span>â Priority support</span>
              </span>
              <span className={styles['text090']}>
                <span>â Premium analytics</span>
              </span>
              <span className={styles['text092']}>
                <span>â Version history</span>
              </span>
            </div>
            <button
              className={` ${styles['button4']} ${projectStyles['button']} `}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className={styles['Features']}>
        <h1 className={styles['text094']}>
          <span>Explore our services</span>
          <br></br>
          <span></span>
        </h1>
        <span className={styles['text097']}>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem
            lorem, malesuada in metus vitae, scelerisque accumsan ipsum. Nam
            pellentesque nulla leo, sagittis vehicula sem commodo nec.â
          </span>
          <span></span>
        </span>
        <div className={styles['container22']}>
          <FeatureCard3 rootClassName="rootClassName"></FeatureCard3>
          <FeatureCard3 rootClassName="rootClassName3"></FeatureCard3>
          <FeatureCard3 rootClassName="rootClassName5"></FeatureCard3>
          <FeatureCard3 rootClassName="rootClassName1"></FeatureCard3>
        </div>
      </div>
      <footer className={styles['Footer']}>
        <div className={styles['container23']}>
          <img
            alt="logo"
            src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
            className={styles['image1']}
          />
          <nav className={styles['Nav1']}>
            <span className={styles['text100']}>About</span>
            <span className={styles['text101']}>Features</span>
            <span className={styles['text102']}>Pricing</span>
            <span className={styles['text103']}>Team</span>
            <span className={styles['text104']}>Blog</span>
          </nav>
        </div>
        <div className={styles['Separator']}></div>
        <div className={styles['container24']}>
          <span className={styles['text105']}>
            Â© 2021 teleportHQ, All Rights Reserved.
          </span>
          <div className={styles['IconGroup1']}>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className={styles['icon17']}
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className={styles['icon19']}
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className={styles['icon21']}
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
