[Game, Developer, Genre].each do |model|
    ActiveRecord::Base.connection.execute("TRUNCATE #{model.table_name} RESTART IDENTITY CASCADE")
end

 [{
     name: "Capcom"
 }, {
     name: "Kojima Productions"
 }].each do |developer|
     Developer.create!(developer)
 end

 [{
     title: "Metal Gear Solid: Phantom Pain",
     photo: "https://static.omelete.uol.com.br/media/extras/capas/MGSV_Metal-Gear-Solid.jpg",
     price: 55,
     writer: "Hideo Kojima",
     platform: "PS4",
     programmer: "Daizaburo Nakamura",
     release_date: "09/14/2009"
 }, {
     title: "Resident Evil: 7",
     photo: "http://i.imgur.com/0PkFutQ.jpg",
     price: 60,
     writer: "Richard Pearsey",
     platform: "PS4",
     programmer: "Yosuke Noro",
     release_date: "09/14/2009"
 }].each do |game|
     Game.create!(game)
 end

 [{ name: "Survival horror" }, { name: "	Action-adventure" }, { name: "	Stealth" }].each do |genre|
     Genre.create!(genre)
 end
