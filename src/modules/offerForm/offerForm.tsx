import React, { useState, useRef } from 'react';
// import PositionsList from '@/modules/careersList/positionsList';
import BackgroundImage from '@/assets/images/ornament.svg';
import Button from '@/components/ant/button/button';
import styles from '../singleOffer/singleOffer.module.scss';
import sx from './offerForm.module.scss';

import SuccessPage from './successPage';

type AppState = 'form' | 'success';

const OfferForm = () => {
  const dropRef = useRef(null);
  const [appState, setAppState] = useState<AppState>('form');
  const [isDragging, setIsDragging] = useState(false);
  const [userCV, setUserCV] = useState<null | File>(null);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');

  const handleDrop = (ev: React.DragEvent<HTMLInputElement>) => {
    ev.preventDefault();

    if (ev.dataTransfer.items) {
      const item = ev.dataTransfer.items[0];
      if (item.kind === 'file') {
        const file = item.getAsFile();
        setUserCV(file);
      }
    }
  };

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();

    if (ev.target.files) {
      const file = ev.target.files[0];
      setUserCV(file);
    }
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    console.log('Submit');
    console.log('Name', userName);
    console.log('Email', userEmail);
    console.log('CV', userCV);

    setAppState('success');
  };

  return (
    <>
      <div className={styles.outer}>
        <img
          className={`basicBackgroundImage ${sx.backgroundImage}`}
          src={BackgroundImage.src}
          alt=""
          role="presentation"
        />
        <div className={`container`}>
          {appState === 'form' && (
            <>
              <h1 className={styles.title}>Apply for MLOps Engineer</h1>
              <div className={styles.buttonsWrap}>
                <div className={styles.button}>
                  <span>Remote Positon</span>
                </div>
                <div className={styles.button}>
                  <span>Full-time</span>
                </div>
                <div className={styles.button}>
                  <span>€75.000/yr - €140.000/yr</span>
                </div>
              </div>
              <div className={styles.inner}>
                <form className={sx.formWrap} onSubmit={handleSubmit}>
                  <div className={sx.inputWrap}>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your name"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className={sx.inputWrap}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      inputMode="email"
                      placeholder="Your email"
                      onChange={(e) => setUserEmail(e.target.value)}
                    />
                  </div>
                  <div className={sx.inputWrap}>
                    <label htmlFor="CV">CV</label>
                    <div className={sx.inputFileWrap}>
                      <input
                        type="file"
                        name="CV"
                        id="CV"
                        placeholder="Your CV"
                        accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        className={sx.inputFile}
                        ref={dropRef}
                        onDrop={handleDrop}
                        onDragEnter={() => setIsDragging(true)}
                        onDragLeave={() => setIsDragging(false)}
                        onChange={handleChange}
                      />
                      <div className={sx.fakeDrop}>
                        <span>
                          {isDragging && !userCV && 'Drop here'}
                          {!isDragging &&
                            !userCV &&
                            'Attach your CV or drop the file'}
                          {userCV && userCV.name}
                        </span>
                        <span className={sx.dropPlus}>+</span>
                      </div>
                    </div>
                  </div>
                  <Button>
                    <span>Submit</span>
                  </Button>
                </form>
                <section className={sx.bodyWrap}>
                  <h2>About the role</h2>
                  <p className={sx.aboutText}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Doloribus itaque quidem ipsa excepturi blanditiis magni
                    harum nobis, corporis et corrupti omnis molestias facere
                    nihil magnam cupiditate fuga eveniet accusamus alias.
                  </p>
                </section>
              </div>
            </>
          )}
          {appState === 'success' && <SuccessPage />}
        </div>
      </div>
      <div className={styles.positionsListOuter}></div>
    </>
  );
};

export default OfferForm;
