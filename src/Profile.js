import { useParams } from 'react-router-dom';

const data = {
  messi: {
    name: 'Messi',
    description: ' best footballer,  born in Argentina',
  },
  gaga: {
    name: 'Lady Gaga',
    description: 'famouse american singer',
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1> User profile</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;