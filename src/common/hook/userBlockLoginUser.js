import { useSelector } from 'react-redux';
import { AuthStatus } from '../constant';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

export default function useBlockLoginUser() {
  const  history = useHistory();
  const status = useSelector(state => state.auth.status);
  useEffect(() => {
    if (status === AuthStatus.Login) {
      history.replace('/');
    }
  }, [status, history]);
}
