# Product Catalog Viewer

A fully–typed **Next.js 16** + **TypeScript** application for browsing, searching, filtering, and viewing products with support for infinite‑scroll pagination and a typed API layer.

This project is built with clean, scalable architecture and focuses on performance, reusability, and developer experience.

---

## 🚀 Features

### ✅ Product Catalog (Home Page `/`)

* Infinite-scroll pagination using **Intersection Observer**.
* Automatically loads the next page of products when the user scrolls down.
* No page refresh or manual page navigation.
* Fully responsive grid layout.
* Reusable `ProductCard` component.

### ✅ Search & Filter

* Search bar integrated with the DummyJSON API (`/products/search?q=`).
* Client-side filtering utilities (price, brand, rating – extendable).
* Clean and debounced search behavior.

### ✅ Product Details Page (`/product/[id]`)

* Server-side data fetching for product details.
* Detailed layout: gallery, header, price, description, rating, reviews, tags.
* Smooth navigation between sections within the page.
* Loading + error states.
* **Delete Product** functionality using:

  * Confirmation dialog
  * API DELETE request
  * Redirect after deletion

### ✅ Clean Architecture

* Modular folder structure
* Reusable shared UI components
* `services/` layer for API logic
* `types/` folder for all shared interfaces
* `utils/` for helpers (storage, fetchers, formatters)

---

## 📁 Folder Structure

```
src/
  app/
    _components/
      InfiniteScrollProducts.tsx     # Infinite scroll using IntersectionObserver
    actions/
      deleteProduct.ts               # Server action (DELETE request)
    product/
      [id]/
        _components/
          ProductBadges.tsx
          ProductDescription.tsx
          ProductDetailsGrid.tsx
          ProductGallery.tsx
          ProductHeader.tsx
          ProductPrice.tsx
          ProductReviews.tsx
          ProductTags.tsx
        error.tsx
        loading.tsx
        not-found.tsx
        page.tsx                     # Product Details Page (SSR)
    globals.css
    layout.tsx
    page.tsx                         # Home Page (List + Infinite Scroll + Search)

  components/
    BackButton.tsx
    DeleteProductButton.tsx
    ProductCard.tsx
    Rating.tsx
    SearchInput.tsx
    SubmitButton.tsx

  services/
    product.api.ts                   # All API calls (typed)

  types/
    product.types.ts                 # Full product interfaces & reusable types

  utils/
    storage.ts                       # Local/session storage handlers
    observer.ts                      # IntersectionObserver utils
    fetcher.ts                       # API fetch helpers

.env
next.config.js
package.json
```

---

## 🔄 Infinite Scroll Pagination

This project uses **Intersection Observer** instead of button-based pagination.

### ✅ How it works:

1. A reference element ("sentinel") is placed at the bottom of the product list.
2. When the user scrolls and this element becomes visible:

   * A new request to `/products?limit=...&skip=...` is fired.
3. The new page of products is appended to the existing list.
4. The UI re-renders smoothly without jumping or refreshing.

✅ Efficient
✅ Native browser API (no heavy libraries)
✅ Smooth UX

---

## 📦 Packages Used

### Dependencies

```
next: 16.0.1
react: 19.2.0
react-dom: 19.2.0
lucide-react: ^0.552.0
```

### Dev Dependencies

```
typescript: ^5
tailwindcss: ^4
jest: ^30
eslint: ^9
@types/* packages
babel-plugin-react-compiler
```

### Why these packages?

* **Next.js 16** → Server Components, App Router, better caching.
* **Tailwind CSS v4** → Fast styling, responsive design.
* **Jest** → Unit testing for components & utils.
* **Lucide-react** → Lightweight icon set.

---

## 🔧 Configuration

Create a `.env` file:

```
BASE_URL=https://dummyjson.com/products
```

---

## ▶️ Getting Started

### Install dependencies

```
npm install
```

### Run development

```
npm run dev
```

### Build for production

```
npm run build
```

### Start production server

```
npm start
```

---

## ✅ Testing

```
npm run test
```

Tests cover:

* Storage helpers
* Product API service
* Reusable UI components

---

## 🧠 Design & Code Decisions

### ✅ Why Infinite Scroll?

* Better UX for large product lists
* No manual pagination
* Works smoothly with IntersectionObserver

### ✅ Why Server Actions for Delete Product?

* Safer API calls
* Built-in revalidation and redirect features
* Clean code separation

---

## ⏳ If I Had More Time

* Add advanced filters (price range, category, rating)
* Add to Cart and Add to Wishlist Items stored in **LocalStorage**
* Add product sorting (price, popularity)
* Add caching with React Query or SWR
* Improve API error logging
* Write more unit tests & integration tests
* Add authentication + protected actions

---

## 📄 License

This project is for educational and assessment purposes.
