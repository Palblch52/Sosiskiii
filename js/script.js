function calculateCalories() {  
  const age = document.getElementById('age').value;  
  const weight = document.getElementById('weight').value;  
  const height = document.getElementById('height').value;  
  const gender = document.getElementById('gender').value;  
  const activity = parseFloat(document.getElementById('activity').value);  
  const resultsDiv = document.getElementById('results');   
  
  // Проверка на заполненность полей  
  if (!age || !weight || !height || !gender || isNaN(activity)) {  
      resultsDiv.innerHTML = '<p style="color:red;">Пожалуйста, заполните все поля.</p>';  
      return;  
  }  

  let bmr;  
  if (gender === 'male') {  
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;  
  } else {  
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;  
  }  
  
  const dailyCaloriesMaintenance = Math.round(bmr * activity);  
  const dailyCaloriesGain = Math.round(dailyCaloriesMaintenance + 500); // Прибавка для набора массы  

  resultsDiv.innerHTML = `  
    <h2>Результаты:</h2>  
    <p><b>Базовый метаболизм (BMR):</b> ${Math.round(bmr)} ккал</p>  
    <p><b>Для поддержания веса:</b> ${dailyCaloriesMaintenance} ккал</p>  
    <p><b>Для набора мышечной массы:</b> ${dailyCaloriesGain} ккал (прибавка 500 ккал)</p>  
  `;  
}  

function addFoodItem() {  
  const foodProduct = document.getElementById('foodProduct').value;  
  const foodDate = document.getElementById('foodDate').value;  
  const foodCalories = document.getElementById('foodCalories').value;  
  const foodDiaryList = document.getElementById('foodDiaryList');  
  
  // Проверка на заполненность полей  
  if (!foodProduct || !foodDate || !foodCalories) {  
      alert('Пожалуйста, заполните все поля для добавления продукта.'); // Вывод сообщения об ошибке  
      return;  
  }  

  const row = document.createElement('tr');  

  row.innerHTML = `  
      <td>${foodDate}</td>  
      <td>${foodProduct}</td>  
      <td>${foodCalories}</td>  
      <td>  
          <button class="btn btn-danger btn-sm" onclick="deleteFoodItem(this)">Удалить</button>  
      </td>  
  `;  

  foodDiaryList.appendChild(row);  
   
  // Очистка полей ввода  
  document.getElementById('foodProduct').value = '';  
  document.getElementById('foodDate').value = '';  
  document.getElementById('foodCalories').value = '';   
}  

function deleteFoodItem(button) {  
  const row = button.parentNode.parentNode;  
  row.parentNode.removeChild(row);  
}  