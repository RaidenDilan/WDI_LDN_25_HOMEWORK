c1 = Continent.create!(name: "Europe")

c1.countries.create!(name: "UK", size: 243, image: "http://www.myvega.co.uk/images/svg/flag--uk.svg", population: 64, language: "English", currency: "£")
c1.countries.create!(name: "France", size: 643, image: "http://ruleoflaw.eu/wp-content/uploads/2014/07/Flag_France.jpg", population: 66, language: "French", currency: "€")
c1.countries.create!(name: "Spain", size: 505, image: "https://upload.wikimedia.org/wikipedia/en/archive/9/9a/20160610210448%21Flag_of_Spain.svg", population: 46, language: "Spanish", currency: "€")
c1.countries.create!(name: "Italy", size: 301, image: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg", population: 59, language: "Italian", currency: "€")
