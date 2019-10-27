import "./index.scss";
import Layout from "../containers/Layout";
import axios from "axios";
import Error from "./_error";

const Index = ({ data, statusCode }) => {
  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <Layout statusCode>
      <div>
        <p>Index page</p>
        <div>
          {JSON.stringify(data)}
          {data.map(user => (
            <div key={user.id}>
              {user.id} - {user.username}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

Index.getInitialProps = async ({ req }) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const statusCode = response.status > 200 ? response.status : false;
  const data_json = await response.data;

  console.log(response.status);
  return { data: data_json, statusCode };
};

export default Index;
