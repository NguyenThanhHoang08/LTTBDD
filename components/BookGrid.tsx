import { StyleSheet, View } from 'react-native';
import BookCard from './Bookcard';

type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
};

type BookGridProps = {
  books: Book[];
};

export function BookGrid({ books }: BookGridProps) {
  return (
    <View style={styles.bookGrid}>
      {books.map((book) => (
        <View key={book.id} style={styles.bookItem}>
          <BookCard
            title={book.title}
            author={book.author}
            price={book.price}
            image={book.image}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bookGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bookItem: {
    width: '48%',
    marginBottom: 16,
  },
});
