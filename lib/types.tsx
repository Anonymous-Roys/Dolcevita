
export interface Product {
    id: number;
    name: string;
    price: number | string;
    description?: string;
    imageUrl?: string;
    category?: string;
    ingredients?: string[];
    weight?: string;
    rating?: number;
    sales?: string;
  }
  
//   export type ProductCategory = 
//     | 'truffles'
//     | 'bars'
//     | 'pralines'
//     | 'gift-boxes'
//     | 'seasonal'
//     | 'assorted';
  
//   export interface ProductImage {
//     id: string;
//     url: string;
//     alt: string;
//     isMain: boolean;
//   }
  
//   export interface ProductVariant {
//     id: string;
//     name: string;
//     price: number;
//     weight: string;
//     stock: number;
//   }
  
//   export interface NutritionalInfo {
//     servingSize: string;
//     calories: number;
//     fat: number;
//     carbs: number;
//     protein: number;
//     allergens: string[];
//   }
  
//   // Review Types
//   export interface Review {
//     id: string;
//     userId: string;
//     productId: string;
//     rating: number;
//     title: string;
//     comment: string;
//     images?: string[];
//     createdAt: Date;
//     helpful: number;
//     verified: boolean;
//   }
  
//   // User Types
//   export interface User {
//     id: string;
//     email: string;
//     firstName: string;
//     lastName: string;
//     addresses: Address[];
//     orders: Order[];
//     wishlist: string[]; // Product IDs
//     preferences: UserPreferences;
//   }
  
//   export interface Address {
//     id: string;
//     type: 'billing' | 'shipping';
//     firstName: string;
//     lastName: string;
//     street: string;
//     city: string;
//     state: string;
//     postalCode: string;
//     country: string;
//     phone: string;
//     isDefault: boolean;
//   }
  
//   export interface UserPreferences {
//     marketingEmails: boolean;
//     orderUpdates: boolean;
//     darkMode: boolean;
//     language: string;
//   }
  
//   // Order Types
//   export interface Order {
//     id: string;
//     userId: string;
//     items: OrderItem[];
//     status: OrderStatus;
//     shippingAddress: Address;
//     billingAddress: Address;
//     payment: PaymentInfo;
//     subtotal: number;
//     shipping: number;
//     tax: number;
//     total: number;
//     createdAt: Date;
//     updatedAt: Date;
//     trackingNumber?: string;
//   }
  
//   export interface OrderItem {
//     productId: string;
//     quantity: number;
//     price: number;
//     variantId?: string;
//   }
  
//   export type OrderStatus = 
//     | 'pending'
//     | 'processing'
//     | 'shipped'
//     | 'delivered'
//     | 'cancelled';
  
//   export interface PaymentInfo {
//     method: 'credit_card' | 'paypal' | 'bank_transfer';
//     status: 'pending' | 'completed' | 'failed';
//     transactionId: string;
//   }
  
//   // Cart Types
//   export interface Cart {
//     id: string;
//     userId?: string;
//     items: CartItem[];
//     subtotal: number;
//     shipping: number;
//     tax: number;
//     total: number;
//     couponCode?: string;
//     discount?: number;
//   }
  
//   export interface CartItem {
//     productId: string;
//     quantity: number;
//     variantId?: string;
//   }
  
//   // Component Props Types
//   export interface HeroSectionProps {
//     title: string;
//     subtitle?: string;
//     backgroundImage: string;
//     ctaText?: string;
//     ctaLink?: string;
//   }
  
//   export interface ProductCardProps {
//     product: Product;
//     variant?: 'default' | 'compact' | 'featured';
//     onAddToCart?: (productId: string) => void;
//     onQuickView?: (productId: string) => void;
//   }
  
//   export interface TestimonialProps {
//     name: string;
//     role?: string;
//     quote: string;
//     rating: number;
//     image?: string;
//   }
  
//   // Animation Types
//   export interface AnimationProps {
//     initial?: object;
//     animate?: object;
//     exit?: object;
//     transition?: object;
//     whileHover?: object;
//     whileTap?: object;
//   }
  
//   // API Response Types
//   export interface ApiResponse<T> {
//     data: T;
//     status: number;
//     message: string;
//     pagination?: PaginationInfo;
//   }
  
//   export interface PaginationInfo {
//     currentPage: number;
//     totalPages: number;
//     pageSize: number;
//     totalItems: number;
//   }
  
//   // Form Types
//   export interface ContactFormData {
//     name: string;
//     email: string;
//     subject: string;
//     message: string;
//   }
  
//   export interface NewsletterFormData {
//     email: string;
//     preferences?: string[];
//   }
  
//   // State Management Types
//   export interface AppState {
//     cart: Cart;
//     user: User | null;
//     products: Product[];
//     filters: ProductFilters;
//     ui: UiState;
//   }
  
//   export interface ProductFilters {
//     category?: ProductCategory;
//     priceRange?: [number, number];
//     rating?: number;
//     sortBy?: 'price' | 'rating' | 'newest';
//     inStock?: boolean;
//   }
  
//   export interface UiState {
//     isCartOpen: boolean;
//     isMenuOpen: boolean;
//     activeModal: string | null;
//     notifications: Notification[];
//     loading: boolean;
//   }
  
//   export interface Notification {
//     id: string;
//     type: 'success' | 'error' | 'info' | 'warning';
//     message: string;
//     duration?: number;
//   }