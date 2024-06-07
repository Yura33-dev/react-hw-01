import userData from './userData.json';
import { friends } from './friends.json';
import { transactions } from './transaction.json';

import Profile from './components/Profile/Profile';
import FriendList from './components/Friends/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;