import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Box, Container, Stack } from '@mui/system';
import { Alert, CircularProgress } from '@mui/material';
import { fetchDetailInfo } from '../../redux/slices/detailSlice';

export default function ServiceCard() {
  const { id } = useParams();
  const detailInfo = useSelector((store) => store.detail);
  const detailError = useSelector((store) => store.detailError);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetailInfo(id));
  }, []);
  return (
    <Container maxWidth="sm">
      {(!detailInfo?.name && !detailError)
        ? (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        )
        : (
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {detailInfo?.name}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {detailInfo?.content}
              </Typography>
              <Typography variant="body2">
                Цена:
                {' '}
                {detailInfo?.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => navigate(-1)}>Вернуться назад</Button>
            </CardActions>
          </Card>
        )}
      {detailError
        ? (
          <Stack sx={{ width: '50%' }} spacing={2}>
            <Alert severity="error">Произошла ошибка!</Alert>
            <Button variant="outlined" size="small" color="error" onClick={() => dispatch(fetchDetailInfo(id))}>
              Повторить запрос
            </Button>
          </Stack>
        )
        : (null)}
    </Container>
  );
}
