import { View, Text, Image, StyleSheet } from 'react-native';
import DiscountBadge from './DiscountBadge';

type BookCardProps = {
  title: string;
  author: string;
  price: number;
  image: string;
};

export default function BookCard({
  title,
  author,
  price,
  image,
}: BookCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        <DiscountBadge text="-20%" />
      </View>

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>

        <Text style={styles.author}>{author}</Text>

        <Text style={styles.price}>{price.toLocaleString()} đ</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 80,
    height: 110,
    borderRadius: 6,
  },
  info: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'space-between',
    height: 110,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});