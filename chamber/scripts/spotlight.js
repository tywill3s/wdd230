fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Filter the data to only include members with a "Gold" membership
    const goldMembers = data.filter(member => member.membership === 'Gold');
    
    // Display the gold member information on the webpage
    const root = document.getElementById('root');
    
    const heading = document.createElement('h1');
    heading.textContent = 'Gold Members';
    root.appendChild(heading);
    
    const goldMemberList = document.createElement('ul');
    goldMembers.forEach(member => {
      const listItem = document.createElement('li');
      
      const name = document.createElement('h2');
      name.textContent = member.name;
      listItem.appendChild(name);
      
      const icon = document.createElement('img');
      icon.src = member.icon;
      listItem.appendChild(icon);
      
      const otherInfo = document.getElementById("other_info");
      otherInfo.innerHTML = member.otherInfo;
      
      goldMemberList.appendChild(listItem);
    });
    root.appendChild(goldMemberList);
  })
  .catch(error => {
    console.error('Failed to load data.json', error);
  });