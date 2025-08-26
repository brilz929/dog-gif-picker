# Buddy's Pawsome Dog Meme Picker

A fun web application that picks the perfect dog meme based on your current mood! Select how you're feeling and get a hilarious dog GIF to match your emotion.

## Features

- **8 Different Emotions**: Choose from playful, excited, sleepy, silly, happy, confused, guilty, or hungry
- **20+ Dog GIFs**: Curated collection of funny and adorable dog memes
- **Responsive Design**: Works on desktop and mobile devices
- **Modal Display**: Clean popup display for viewing memes
- **Random Selection**: Get different memes each time you select the same emotion

## How to Use

1. Select your current emotion from the radio buttons
2. Click the "Get Image" button
3. Enjoy your personalized dog meme!
4. Click the X or outside the modal to close
5. Try different emotions to see more memes

## Technologies Used

- **HTML5**: Structure and layout
- **CSS3**: Styling and responsive design
- **Vanilla JavaScript**: Interactive functionality
- **ES6 Modules**: Modular code organization


## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/brilz929/dog-gif-picker.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd dog-gif-picker
   ```

3. **Add your dog GIF files**:
   - Create an `images/` folder
   - Add GIF files with names matching the data.js file
   - Files should be named: `playful-1.gif`, `sleepy-1.gif`, etc.

4. **Serve the files**:
   - Use a local web server (required for ES6 modules)
   - Options:
     - `python -m http.server 8000`
     - VS Code Live Server extension
     - Node.js `npx serve`

5. **Open in browser**:
   - Navigate to `http://localhost:8000`

## Customization

### Adding More Emotions
1. Add new emotion tags to dog objects in `data.js`
2. The radio buttons will automatically update

### Adding More Dog GIFs
1. Add new objects to the `dogsData` array in `data.js`
2. Place corresponding GIF files in the `images/` folder
3. Use descriptive `alt` text for accessibility

### Styling Changes
- Modify CSS variables in `index.html` for color scheme
- Update `.emotion-radios` for different button styles
- Adjust `.meme-modal` for modal appearance

## Browser Support

- Modern browsers with ES6 module support
- Chrome 61+
- Firefox 60+
- Safari 10.1+
- Edge 16+

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Dog GIFs sourced from various meme collections
- Inspired by the need for more dog content on the web
- Built as a fun project to practice vanilla JavaScript

## Live Demo

Visit the live demo on Netlify: [https://dog-gif-picker-scrimba-v1.netlify.app/](https://dog-gif-picker-scrimba-v1.netlify.app/)

---

Made with ❤️ for dog lovers everywhere!
