import { Grid } from '@material-ui/core';
import React from 'react';
import image from '../../images/faq.jpg';
import Footer from '../Footer';
import './FAQ.css';

function FAQ() {
  return (
    <>
      <Grid container direction='row' alignItems='flex-start' justify='center'>
        <img src={image} alt='accupunture needles being used' width='100%' />
      </Grid>
      <Grid container direction='row' alignItems='flex-start' justify='center'>
        <h1 className='faqTitle'>FAQ Regarding Acupuncture Therapy</h1>
      </Grid>
      <Grid
        container
        direction='row'
        alignItems='flex-start'
        justify='flex-start'
        className='faqGrid'
      >
        <h2 className='faqQuestions'>{`1) Do the needles hurt?`}</h2>
        <text className='faqText'>{`No! For the most part, you will not even notice the needle being inserted. The most common sensations include warmth, pressure, energy traveling, or possible a comfortable ache, similar to a sore muscle. `}</text>
      </Grid>
      <Grid
        container
        direction='row'
        alignItems='flex-start'
        justify='flex-start'
        className='faqGrid'
      >
        <h2 className='faqQuestions'>{`2) How many sessions do I need?`}</h2>
        <text className='faqText'>{`This depends on many factors, including the type and cause of the issue and how long you have experienced symptoms. Often improvement is noticed within the first treatment and for some it takes three treatments to see the positive effects of acupuncture. Acute conditions such as a sprain or back pain caused by a recent trauma may take only 3 treatments to correct. Chronic pain or internal health issues, such as indigestion or insomnia that you've experienced for years, may take many regularly scheduled sessions to make significant progress. The effects of acupuncture are cumulative, and you will find you feel progressively better with each session.   `}</text>
      </Grid>
      <Grid
        container
        direction='row'
        alignItems='flex-start'
        justify='flex-start'
        className='faqGrid'
      >
        <h2 className='faqQuestions'>{`3) How much does a session cost?`}</h2>
        <text className='faqText'>{`Each acupuncture session is $90.00 and takes 50 to 90 minutes. For new patients, a “first visit” session is $135.00 which includes an initial health consultation and the acupuncture treatment and takes 1 1/2 to 2 hours. `}</text>
      </Grid>
      <Grid
        container
        direction='row'
        alignItems='flex-start'
        justify='flex-start'
        className='faqGrid'
      >
        <h2 className='faqQuestions'>{`4) What does acupuncture treat?`}</h2>
        <text className='faqText'>{`Most people think of acupuncture as a pain relief treatment for things such as back pains or headaches. However, that is only a tiny fraction of the conditions that can be successfully treatment with acupuncture. According to the World Health Organization, acupuncture is proven to treat hundreds of health problems.`}</text>
      </Grid>
      <Grid
        container
        direction='row'
        alignItems='flex-start'
        justify='flex-start'
        className='faqGrid'
      >
        <h2 className='faqQuestions'>{`5) Can acupuncture help with my condition?`}</h2>
        <text className='faqText'>{`Most likely. If you are unsure whether acupuncture can help your specific condition, please call Michelle (403)540-7204. She will provide an honest assessment or possibly recommend an alternate therapy for you. `}</text>
      </Grid>
      <Grid
        container
        direction='row'
        alignItems='flex-start'
        justify='flex-start'
        className='faqGrid'
      >
        <h2 className='faqQuestions'>{`6) Are the needles sterile?`}</h2>
        <text className='faqText'>{`Acupuncture needles are prepackaged, sterile, and hair-thin. They are used only once on your body and properly disposed of into a Sharp's container immediately. Michelle follows strict clean needle protocols.`}</text>
      </Grid>
      <Grid
        container
        direction='row'
        alignItems='flex-start'
        justify='flex-start'
        className='faqGrid'
      >
        <h2 className='faqQuestions'>{`7) Is it ok if I fall asleep during a session?`}</h2>
        <text className='faqText'>{`Yes! In fact, most people do. Often people feel a deep relaxation in the body once the needles have been placed. `}</text>
      </Grid>
      <Grid
        container
        direction='row'
        alignItems='flex-start'
        justify='flex-start'
        className='faqGrid'
      >
        <h2 className='faqQuestions'>{`8) How does acupuncture actually work?`}</h2>
        <text className='faqText'>{`From a western viewpoint, acupuncture needles stimulate neurotransmitters to release dopamine and serotonin, providing our bodies with natural pain relief. From and eastern viewpoint, our bodies run on energy called "Qi", a Chinese term, which circulates the blood, chemicals, hormones, and nutrients in our body. Acupuncture stimulates the flow of Qi energy to provide proper functioning and balance. `}</text>
      </Grid>
      <Grid
        container
        direction='row'
        alignItems='flex-start'
        justify='flex-start'
        className='faqGrid'
      >
        <h2 className='faqQuestions'>{`9) Do medical doctors practice acupuncture?`}</h2>
        <text className='faqText'>{`Generally, medical doctors do not practice acupuncture. There may be a select few doctors who are open-minded to incorporating natural and holistic options for their patients such as acupuncture. However, most medical doctors prefer to refer patients to licensed acupuncturists.`}</text>
      </Grid>
      <Footer />
    </>
  );
}

export default FAQ;
