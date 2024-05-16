import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded() {
  return (
    <Stack 
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      spacing={1}
      sx={{ height: '10px'}}
      marginBottom={10}
      marginTop={5}
      >
      <Pagination count={10} shape="rounded" />
    </Stack>
  );
}