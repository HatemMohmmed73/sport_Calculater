
// Performance Calculation
document.getElementById('performanceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const distance = parseFloat(document.getElementById('distance').value);
    const time = parseFloat(document.getElementById('time').value);
    const speed = distance / time;
    document.getElementById('performanceResult').innerText = `Your speed is ${speed.toFixed(2)} m/s.`;
});

// BMI Calculation
document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const weight = parseFloat(document.getElementById('bmiWeight').value);
    const height = parseFloat(document.getElementById('bmiHeight').value) / 100;
    const bmi = (weight / (height ** 2)).toFixed(2);
    document.getElementById('bmiResult').innerText = `Your BMI is ${bmi}`;
});

// Calorie Calculation
document.getElementById('calorieForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const age = parseInt(document.getElementById('calorieAge').value);
    const weight = parseFloat(document.getElementById('calorieWeight').value);
    const height = parseFloat(document.getElementById('calorieHeight').value);
    const activity = parseFloat(document.getElementById('activity').value);
    
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    const dailyCalories = (bmr * activity).toFixed(2);
    document.getElementById('calorieResult').innerText = `Your estimated daily caloric needs are ${dailyCalories} calories.`;
});
