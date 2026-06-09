import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { ContentFullsizeBlock, PrimaryButton } from '../components/Elements';
import Header from '../components/Header';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Applications() {
  const loc = useLocation();
  return (
    <>
      <Helmet>
        <title>Applications | TeluguSMP</title>
        <link rel="canonical" href={`https://telugusmp.net${loc.pathname}`} />
      </Helmet>
      <Header>
        <div>
          <h1>Applications & Forms</h1>
          <p>Apply for moderator or professional role positions and take an active role in shaping and managing our community, or sign up for our frequent server consultation events.</p>
        </div>
      </Header>
      <main>

        <AnimationOnScroll offset={0} animateOnce={true} animateIn={'animate__fadeInUp'} duration={.5}>

          <ContentFullsizeBlock>
            {/* <IconModerator className="application-icon mod" /> */}
            <h2 style={{ color: "var(--color-text-application-mod)" }}>Moderation Team</h2>
            <p>
              Our community moderators help ensure that the community remains a
              safe and friendly space for all members. They monitor the community
              for rule violations, respond to member questions and concerns, and
              help facilitate positive interactions between members.
            </p>
            <h3 style={{ color: "var(--color-text-application-mod)" }}>Requirements</h3>
            <ul>
              <li>You must be at least 16 years old in order to apply for this moderator position.</li>
              <li>Prior experience in community moderation is not a necessity.</li>
              <li>Prior message activity within the community.</li>
              <li>General familiarity with how the server works and is built up.</li>
            </ul>
            <PrimaryButton ext text="Apply Now" destination="https://forms.gle/J4WZPkoxSu9KZhAb9" arrow />
          </ContentFullsizeBlock>

          <ContentFullsizeBlock>
            {/* <IconProfessional className="application-icon professional" /> */}
            <h2 style={{ color: "var(--color-text-application-professional)" }}>Professional Role</h2>
            <p>
              Our Industry Community Professionals are experts in particular areas
              related to community management. They use their skills and knowledge
              to help shape huge exemplary communities together with well
              established projects, companies and brands.
            </p>
            <h3 style={{ color: "var(--color-text-application-professional)" }}>Requirements</h3>
            <ul>
              <li>You need to currently work in professional community management.</li>
              <li>You must be at least 18 years old.</li>
              <li>You must have an industry email (someone@example.com) and LinkedIn profile.</li>
            </ul>
            <PrimaryButton ext text="Apply Now" destination="https://forms.gle/YuJwLZkmKktugtWm6" arrow />
          </ContentFullsizeBlock>

        </AnimationOnScroll>
      </main>
    </>
  );
}

export default Applications;