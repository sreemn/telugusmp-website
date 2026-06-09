import { Helmet } from 'react-helmet';
import { useOutletContext } from 'react-router-dom';
import { PrimaryButton, ContentBlock } from '../components/Elements';
import Header from '../components/Header';

function Home() {
  const [theme] = useOutletContext();
  return (
    <>
      <Helmet>
        <title>TeluguSMP</title>
        <link rel="canonical" href="https://telugusmp.net" />
      </Helmet>
      <Header>
        <div>
          <h1>TeluguSMP</h1>
          <p>TeluguSMP is a welcoming Minecraft survival community where friends come together to build, explore, and enjoy relaxing adventures. Create your dream builds, make new friends, and become part of a growing Telugu Minecraft community.</p>
        </div>
      </Header>
      <main>

        <div className='supportblock'>
          <h2>Are you interested in supporting our work?</h2>
          <p>
            Check out our Ko-Fi page! You can directly help us with financially
            compensating our developers, content editors, and managers for their hard work. Thanks!
          </p>
          <div className='supportblock-actions'>
            <PrimaryButton text="Donate" border ext destination="https://ko-fi.com/telugusmp" arrow />
          </div>
        </div>

      </main>
    </>
  );
}

export default Home;