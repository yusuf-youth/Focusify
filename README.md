<img src="assets/logo.png" width="600" />

Focusify helps you stay productive by combining a Pomodoro timer with a built-in to-do list called Subjects. It provides ambient sounds and a visually calming interface to create a focused, distraction-free work environment. Focusify logs your tasks so you can track progress over time and build better habits.

<br />

<h2>Project Features</h2>
The project has several features that are worth paying attention to. 
<h3>React</h3>
<ul>
  <li>
    <b>Components. </b> The app contains reusable components that can be used throughout the project.
  </li>
  <li>
    <b>React Hooks. </b> The app makes use of React hooks like <code>useState</code>, <code>useEffect</code>, <code>useRef</code> and <code>useContext</code> to manage component state, handle side effects, manage global state efficiently, and reference DOM elements directly without causing re-renders improving code simplicity and performance.
  </li>
  <li>
    <b>Custom Hooks. </b> <code>useTimerSound</code> manages the audio element lifecycle and triggers sound playback on specific timer status transitions (Start/Restart and End).
  </li>
  <li>
    <b>Context. </b> The <code>AppContext</code> in this application serves as the central data store, providing the application state (including goals, timer status, and time control functions) to all components without manual prop drilling.
  </li>
  <li>
    <b>constants.jsx. </b> This file exports centralized configuration objects, including <code>TIMER_STATUS</code> which defines all possible states for the countdown logic, and <code>LOCAL_STORAGE_NAMES</code> for standardized key management.
  </li>
  <li>
    <b>helpers.jsx. </b> This file contains utility functions like <code>generateSimpleId</code> for creating time-based unique keys, <code>formatTime</code> for converting seconds into MM:SS strings, <code>loadInitialSubjects</code> for fetching initial state data from Local Storage, and so on.
  </li>
  <li>
    <b>icons.jsx. </b> This file exports various reusable SVG components (like <code>FilledCheckmark</code> and <code>EmptyCircle</code>) used throughout the application for visual elements and UI controls.
  </li>
</ul>

<h3>Markup & Styles</h3>
<ul>
  <li>
    <b>BEM. </b>The project follows the BEM methodology for structuring SCSS, where each component is broken down into <code>blocks</code>, <code>elements</code>, and <code>modifiers</code>. This approach ensures that the code is modular, scalable, and easy to maintain.
  </li>
  <li>
    <b>Global Styles. </b>The project has <code>_global.scss</code> for global styles, <code>_normalize.scss</code> for resetting default styles, <code>_font.scss</code> for custom fonts, and so on.
  </li>
  <li>
    <b>CSS Property Grouping. </b> CSS properties are organized in a consistent and logical order to improve readability, maintainability, and ease of debugging.
  </li>
  <li>
    <b>CSS Variables. </b>The project uses css variables throughout styles ensuring maintainability, reusability, and consistency of the code.
  </li>
  <li>
    <b>SCSS. </b>The project is written in the SCSS preprocessor and contains useful features such as mixins for comfortable styling.
  </li>
</ul>

<h2>App Features</h2>
The app has several features:
<ul>
  <li>
    <b>Add Subjects. </b> Focusify lets you create focus-worthy “Subjects” — tasks you choose to work on with intention.
  </li>
  <li>
    <b>Modify Timer. </b> The timer is flexible, allowing you to increase or decrease its duration in precise one-minute steps.
  </li>
  <li>
    <b>Persistent Storage. </b> All your tasks and settings are saved automatically through local storage, so nothing gets lost.
  </li>
  <li>
    <b>Design. </b> The app features a minimalistic design with subtle, smooth animations, keeping the interface clean and distraction-free.
  </li>
  <li>
    <b>Accessibility. </b> It includes accessibility features like visually-hidden elements, aria-labels, and title attributes to support inclusive use.
  </li>
  <li>
    <b>Notification. </b> When the timer starts or finishes, it plays a notification sound to alert the user instantly.
  </li>
</ul>
