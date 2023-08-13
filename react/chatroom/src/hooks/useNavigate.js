import { useNavigate } from 'react-router-dom';

export default function useNav() {
  const navigate = useNavigate();
  return navigate;
}
