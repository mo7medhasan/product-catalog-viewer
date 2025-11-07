# Product Catalog Viewer

A modern **Next.js 16** application for browsing products, viewing detailed product pages

This project demonstrates clean architecture, reusable components, server actions, and an organized folder structure suitable for scalable frontend applications.

---

## 🚀 Features

### ✅ Product Catalog

* Display a paginated or infinite scroll list of products.
* Product cards with price, image, rating, badges, and actions.

### ✅ Product Details Page

* Gallery, specs, description, reviews, tags, and dynamic route handling.
* SEO-friendly dynamic `[id]` pages.

###

### ✅ Built with Modern Tools

* **Next.js 16 App Router**
* **React 19**
* **Tailwind CSS v4**
* **Lucide-react Icons**
* **TypeScript**
* **Jest** for testing
* Clean folder structure
* Reusable shared components

---

## 📁 Folder Structure

Below is the project structure with description for each part:

```
src/
  app/
    _components/
      InfiniteScrollProducts.tsx       # Shared infinite scroll logic
    actions/
      deleteProduct.ts                 # Server action for deleting products
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
        page.tsx                       # Dynamic product details page
    globals.css
    layout.tsx
    page.tsx                           # Home page showing product list

  components/
    BackButton.tsx
    DeleteProductButton.tsx
    ProductCard.tsx
    Rating.tsx
    SearchInput.tsx
    SubmitButton.tsx

  services/
    product.api.ts                     # API calls

  types/
    product.types.ts                   # Shared TypeScript types

  utils/
    ...                                # Helper functions

.env                                    # Environment variables
next.config.js                           # Next.js config
package.json
```

---

## 📦 Dependencies

### **Main dependencies**

```
next: 16.0.1
react: 19.2.0
react-dom: 19.2.0
lucide-react: ^0.552.0
```

### **Dev dependencies**

```
TypeScript: ^5
TailwindCSS v4
Jest: ^30
ESLint: ^9
babel-plugin-react-compiler
```

---

## ⚙️ Configuration

### ✅ Environment Variables

Create a `.env` file:

```
BASE_URL=https://dummyjson.com/products
```

## ▶️ Getting Started

### 1. Install dependencies

```
npm install
```

### 2. Run development server

```
npm run dev
```

### 3. Build for production

```
npm run build
```

### 4. Start production server

```
npm start
```

---

## ✅ Testing

Run unit tests using Jest:

```
npm run test
```

---

## 📝 Roadmap

* ✅ Improve accessibility
* ✅ Add pagination option
* 🔲 Add filtering & searching

---

## 📄 License

This project is for educational and assessment purposes.
