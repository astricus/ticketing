import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  // axios.get('/api/users/currentuser').catch(err => console.log(err.message));
  return currentUser ? <h1>You are signed in</h1> : <h1>You are not signed in</h1>;
};

LandingPage.getInitialProps = async (context) => {
  console.log('Landing page!');
  const { data } = await buildClient(context).get('/api/users/currentuser');
  return data;
};

export default LandingPage;
