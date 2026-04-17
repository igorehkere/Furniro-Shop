<a id="readme-top"></a>

# Furniro Shop

An online clothing store with a catalog of products, pagination, filtering by categories, a news page, and a feedback form. The project is written in TypeScript using React and Vite.

## Functionality

### Main page
- Banner with a call to go to the catalog
- Categories block (T-shirts, Hoodies, Jackets)
- Clicking on a category opens a page with products of that category

### Shop page (`/shop`)
- Grid of products (10 products per page)
- Pagination for navigating between pages
- Clicking on a product card → product details page

### Category page (`/:id`)
- Product filtering by selected category
- Pagination for each category

### Product card (`/shop/:id`)
- Image gallery with thumbnails
- Product name, price, rating, description
- Quantity counter (1–10)
- **Add to Cart / In Cart** button (demo mode: changes state and shows an alert)

### News page (`/news`)
- Search news by keyword
- Results: title, description, author, date, source link
- ⚠️ *Note: News API only works locally (free tier limitation)*

### Contact page (`/contact`)
- Feedback form (name, email, subject, message)
- **Submit** button → displays a thank you message
- No actual data sending (demo mode)

## Screenshots

### Home page

<img width="2127" height="1228" alt="image" src="https://github.com/user-attachments/assets/1b21c5ec-961c-4646-97c7-3cb3221142a6" /> 
<hr>
<img width="2118" height="1221" alt="image" src="https://github.com/user-attachments/assets/ff1e305d-6453-4ac7-ad26-82b88c78ad8f" />


### Product card

<img width="2123" height="1209" alt="image" src="https://github.com/user-attachments/assets/42d8ad40-06b8-46f8-ad1a-666a2189cf99" />

### Shop page

<img width="2137" height="1224" alt="image" src="https://github.com/user-attachments/assets/8472f995-7072-41c7-8b8e-9012350608a6" />
<hr>
<img width="2125" height="1214" alt="image" src="https://github.com/user-attachments/assets/26ea84a1-515d-49ee-817e-cd21efe09e32" />

### News page

#### Start state

<img width="2119" height="1207" alt="image" src="https://github.com/user-attachments/assets/fda9ece0-488b-4c56-8518-a7585dea505b" />

#### Page after entering the word 

<img width="2127" height="1217" alt="image" src="https://github.com/user-attachments/assets/d694cb42-d209-43e2-829e-9c45ebf21816" />

### Contact page

#### Start state

<img width="2126" height="1211" alt="image" src="https://github.com/user-attachments/assets/960caa0b-cb9f-4c84-821c-887483012bf9" />
<hr>
<img width="2129" height="1212" alt="image" src="https://github.com/user-attachments/assets/40bc5d2c-ae8f-4b66-a64c-378780b1972f" />

#### After click 'Submit'

<img width="2134" height="1224" alt="image" src="https://github.com/user-attachments/assets/38c2ca79-e7c5-417e-a8b6-bc8aca86fc36" />

## Technologies

- React
- TypeScript
- React Router DOM
- Vite
- CSS Modules
- Fetch API / REST API
- GitHub Pages (GitHub Actions)

## Project Structure

src/  
├── bll/   
│ ├── useCategories.ts  
│ ├── useDetails.ts  
│ ├── useNews.ts  
│ ├── usePageClothes.ts  
│ ├── useProducts.ts  
│ └── useSelectCategory.ts  
├── dal/   
│ └── api.ts  
├── ui/   
│ ├── Categories.tsx  
│ ├── ContactForm.tsx  
│ ├── ContactInform.tsx  
│ ├── ContactTitle.tsx  
│ ├── Counter.tsx  
│ ├── DetailsProduct.tsx  
│ ├── FindBar.tsx  
│ ├── Hat.tsx  
│ ├── NewsItem.tsx  
│ ├── NewsList.tsx  
│ ├── PageBar.tsx  
│ ├── ProductGallery.tsx  
│ ├── ProductItem.tsx  
│ ├── ProductList.tsx  
│ ├── SelectedCategory.tsx  
│ ├── SelectedCategoryList.tsx  
│ └── Support.tsx  
├── pages/   
│ ├── Contact.tsx  
│ ├── Home.tsx  
│ ├── News.tsx  
│ └── Shop.tsx  
├── utils/   
│ └── path.ts  
├── styles/   
├── assets/   
├── App.tsx  
├── main.tsx  
└── index.css  

## Architecture Features

- **Separation of concerns.** The project is divided into three layers:
  - **BLL** — custom hooks (`useProducts`, `useNews`, `useDetails`, `useSelectCategory`, `useCategories`, `usePageClothes`)
  - **DAL** — isolated API requests (`api.ts`)
  - **UI** — components that only display data and call hooks
- **Skeleton.** A loading GIF is shown while data is being fetched
- **CSS Modules.** Styles don't conflict between components
- **Responsive design.** Media queries for mobile devices (Desktop First approach)

## Responsive Breakpoints

| Screen width | Changes |
|--------------|---------|
| < 1400px | Product grid: 5 → 3 columns |
| < 1000px | Product grid: 3 → 2 columns, Support block: 4 → 2 columns |
| < 600px  | Product grid: 2 → 1 column, Support block: 2 → 1 column |
| < 570px  | Product gallery: horizontal → vertical (thumbnails below main image) |
| < 520px  | Navigation: flex-wrap for buttons |

## Installation and Run

```sh
git clone https://github.com/igorehkere/Furniro-Shop
```
```sh
cd Furniro-Shop
```
```sh
npm install
```
```sh
npm run dev
```
For the news API to work, you need a NewsAPI key. Create a .env file in the project root:
```
VITE_API_KEY=your_newsapi_key
```

## Deployment

The project is deployed on GitHub Pages using GitHub Actions. Deployment happens automatically when pushing to the master branch.
[Live demo](https://igorehkere.github.io/Furniro-Shop)

## Implementation Features

* The Add to Cart button is a demo: clicking it changes the button color (gray/white) and shows an alert
* The contact form does not actually send data — clicking Submit shows a "Thank you" message
* The news search works only locally due to NewsAPI restrictions
* All images are stored in the public/images folder and accessed via a helper function getAssetPath() for correct path resolution on GitHub Pages
* The project uses basename in React Router and base in Vite config for correct deployment in a subdirectory

## License

MIT

## Author

Igorehkere

<p align='right'><a href='#readme-top'>Back to top</a></p>
