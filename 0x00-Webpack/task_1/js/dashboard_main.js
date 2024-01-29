// js/dashboard_main.js
import $ from 'jquery';
import _ from 'lodash';

// Add paragraphs and button to the body
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="startButton">Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Function to update the click count
const updateCounter = _.debounce(() => {
  const count = $('#count');
  const currentCount = parseInt(count.text()) || 0;
  count.text(`${currentCount + 1} clicks on the button`);
}, 1000); // Adjust the debounce delay as needed

// Bind the updateCounter function to the click event of the button
$('#startButton').on('click', updateCounter);
