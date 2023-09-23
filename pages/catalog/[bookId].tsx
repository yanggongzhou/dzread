import Book, { getServerSideProps as getServerSidePropsDefault } from '../book/[bookId]';
export default Book;
export const getServerSideProps = getServerSidePropsDefault;
