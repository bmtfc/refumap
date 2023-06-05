CREATE DATABASE IF NOT EXISTS refumap_db;

USE refumap_db;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(50),
    password VARCHAR(50),
    role VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS locations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    m_name VARCHAR(100),
    longitude DECIMAL(12,8),
    latitude DECIMAL(12,8),
    country VARCHAR(50),
    city VARCHAR(50),
    m_address VARCHAR(100),
    work_time VARCHAR(50),
    category VARCHAR(50),
    m_description TEXT
);

INSERT INTO locations (m_name, longitude, latitude, country, city, m_address, work_time, category, m_description) VALUES 
('Dworzec Główny PKP Kraków - Punkty informacyjne', 50.0683634, 19.9451469, 'Poland', 'Krakow', 'Pawia, Kraków, 31-154, Poland','9:00-18:00', 'Integration/Support Organizations', 'Information point'),
('Okręgowa Rada Adwokacka w Krakowie', 50.0671899, 19.930252, 'Poland', 'Krakow', '9:00-15:00', 'ul. Batorego 17, Kraków, 31-135, Poland', 'Legal Services', 'https://adwokatura.krakow.pl/pomoc-dla-ukrainy/'),
('Szpital Specjalistyczny imienia Józefa Dietla', 50.0635989, 19.926374, 'Poland', 'Krakow', '00:00-23:59', 'Skarbowa 4, Kraków, 31-121, Poland', 'Medical Assistance', 'Hospital'),
('Centrum Wolontariatu w Warszawie', 21.009417, 52.239236, 'Poland', 'Warsaw', 'ul. Wilcza 9/11, Warsaw, 00-532, Poland', '09:00-17:00', 'Volunteering', 'Center providing various opportunities for community engagement'),
('Všeobecná fakultní nemocnice v Praze', 14.417561, 50.077522, 'Czech Republic', 'Prague', 'U Nemocnice 499/2, 128 08 Nové Město, Czechia', '00:00-23:59', 'Medical Assistance', 'City hospital providing a wide range of medical services'),
('Polski Bank Żywności', 19.457216, 51.759248, 'Poland', 'Łódź', 'ul. Liściasta 101, 91-357 Łódź, Poland', '08:00-16:00', 'Food Aid', 'Organization providing food aid for those in need'),
('Poradna pro integraci', 14.466020, 50.075947, 'Czech Republic', 'Prague', 'Krakovská 1307/22, 110 00 Nové Město, Czechia', '08:00-16:00', 'Integration/Support Organizations', 'Organization providing support for integration of immigrants'),
('Biuro Tłumaczeń Alingua', 19.938254, 50.064650, 'Poland', 'Krakow', 'ul. Sławkowska 14, 31-014 Kraków, Poland', '09:00-17:00', 'Oral and Written Translation', 'Providing translation services between Polish and Czech'),
('Fundacja Pro Bono', 21.003853, 52.229676, 'Poland', 'Warsaw', 'ul. Szpitalna 8, 00-031 Warsaw, Poland', '09:00-17:00', 'Legal Services', 'Legal advice and services provider'),
('Psychosociální centrum Praha', 14.403982, 50.073791, 'Czech Republic', 'Prague', 'Karolíny Světlé 1091/20, 110 00 Staré Město, Czechia', '09:00-17:00', 'Psychological Assistance', 'Center providing psychological help and therapy'),
('Politechnika Warszawska', 21.011816, 52.220238, 'Poland', 'Warsaw', 'pl. Politechniki 1, 00-661 Warsaw, Poland', '08:00-18:00', 'Education', 'Technical university providing various educational programs'),
('Ratusz w Warszawie', 21.012228, 52.250973, 'Poland', 'Warsaw', 'Plac Bankowy 3/5, 00-950 Warsaw, Poland', '09:00-17:00', 'Government Bodies', 'City Hall of Warsaw'),
('Park Rady Europy', 21.060165, 52.163229, 'Poland', 'Warsaw', 'Park Rady Europy, Warsaw, Poland', '00:00-24:00', 'Leisure', 'A large public park for various leisure activities'),
('lek. Barbara Górska', 50.0810541, 19.8846599, 'Poland', 'Krakow', '00:00-23:59', 'Na Błonie 1, Kraków, 30-147, Poland', 'Medical Assistance', 'Hospital'),
('Centrum Wolontariatu w Krakowie', 19.9449799, 50.0646501, 'Poland', 'Krakow', 'ul. Łobzowska 1, 31-140 Kraków, Poland', '09:00-17:00', 'Volunteering', 'Krakow center providing various opportunities for community engagement'),
('Fakultní nemocnice Olomouc', 17.261950, 49.595527, 'Czech Republic', 'Olomouc', 'I.P.Pavlova 185/6, 779 00 Olomouc, Czechia', '00:00-23:59', 'Medical Assistance', 'City hospital providing a wide range of medical services in Olomouc'),
('Polski Bank Żywności w Gdańsku', 18.656058, 54.352025, 'Poland', 'Gdansk', 'ul. Podwale Staromiejskie 93/94, 80-844 Gdańsk, Poland', '08:00-16:00', 'Food Aid', 'Gdansk branch of the organization providing food aid for those in need'),
('Poradna pro integraci - Brno', 16.611338, 49.195060, 'Czech Republic', 'Brno', 'Dominikánská 132/9, 602 00 Brno, Czechia', '08:00-16:00', 'Integration/Support Organizations', 'Brno branch of the organization providing support for integration of immigrants'),
('Tłumaczenia24 - Biuro Tłumaczeń', 17.0385376, 51.1078852, 'Poland', 'Wrocław', 'Rynek 9/11, 50-106 Wrocław, Poland', '09:00-17:00', 'Oral and Written Translation', 'Wroclaw translation office providing services in many languages'),
('Poradna pro integraci - Ostrava', 18.290248, 49.820923, 'Czech Republic', 'Ostrava', '28. října 2993/211, 702 00 Moravská Ostrava a Přívoz, Czechia', '09:00-17:00', 'Integration/Support Organizations', 'Ostrava branch of the organization providing support for integration of immigrants'),
('Instytut Psychologii, Uniwersytet Gdański', 18.591916, 54.378281, 'Poland', 'Gdansk', 'Bażyńskiego 4, 80-952 Gdańsk, Poland', '08:00-16:00', 'Psychological Assistance', 'Institute of Psychology at the University of Gdansk providing psychological services'),
('Politechnika Łódzka', 19.458553, 51.759445, 'Poland', 'Łódź', 'ul. Stefanowskiego 1/15, 90-924 Łódź, Poland', '08:00-18:00', 'Education', 'Technical university in Łódź providing various educational programs'),
('Urząd Miasta Gdańsk', 18.644739, 54.352206, 'Poland', 'Gdansk', 'Nowe Ogrody 8/12, 80-803 Gdańsk, Poland', '08:00-16:00', 'Government Bodies', 'City Hall of Gdansk'),
('Park Świętokrzyski', 21.012445, 52.231200, 'Poland', 'Warsaw', 'Park Świętokrzyski, 00-001 Warsaw, Poland', '00:00-24:00', 'Leisure', 'A large public park in Warsaw for various leisure activities'),
('Centrum Dopravy Bratislava', 17.1067, 48.1486, 'Slovakia', 'Bratislava', 'Trnavská cesta 8211/100A, 831 04 Nové Mesto, Slovakia', '09:00-17:00', 'Transportation', 'Transport center in Bratislava providing transportation services'),
('Univerzita Komenského v Bratislave', 17.1171, 48.1543, 'Slovakia', 'Bratislava', 'Šafárikovo nám. 6, 818 06 Staré Mesto, Slovakia', '08:00-18:00', 'Education', 'Comenius University in Bratislava'),
('Slovenský Červený kríž', 17.1077, 48.1476, 'Slovakia', 'Bratislava', 'Námestie slobody 6953/1, 811 06 Bratislava, Slovakia', '09:00-17:00', 'Medical Assistance', 'Slovak Red Cross provides medical services and assistance'),
('Zdravotnícke záchranárske služby Košice', 21.2492, 48.7145, 'Slovakia', 'Kosice', 'Staničné námestie 1, 040 01 Košice, Slovakia', '00:00-23:59', 'Medical Assistance', 'Health and rescue services in Kosice'),
('Žilinská univerzita', 18.7463, 49.2235, 'Slovakia', 'Zilina', 'Univerzitná 8215/1, 010 26 Žilina, Slovakia', '08:00-18:00', 'Education', 'University in Zilina providing various educational programs'),
('Urad vlady Slovenskej republiky', 17.1075, 48.1455, 'Slovakia', 'Bratislava', 'Námestie slobody 1, 813 70 Bratislava, Slovakia', '09:00-17:00', 'Government Bodies', 'Government office of the Slovak Republic'),
('Nemocnica sv. Michala', 17.1215, 48.1462, 'Slovakia', 'Bratislava', 'Skaritzova 1, 811 03 Bratislava, Slovakia', '00:00-23:59', 'Medical Assistance', 'St. Michael Hospital in Bratislava'),
('Centrum pre Európu a Svet', 17.1132, 48.1476, 'Slovakia', 'Bratislava', 'Karloveská 63, 841 04 Karlova Ves, Slovakia', '09:00-17:00', 'Integration/Support Organizations', 'Center for Europe and the World - organization providing support for integration'),
('Univerzita Palackého v Olomouci', 17.2517, 49.5956, 'Czech Republic', 'Olomouc', 'Křížkovského 511/8, 771 47 Olomouc, Czechia', '08:00-18:00', 'Education', 'Palacky University in Olomouc providing various educational programs'),
('Ostravská univerzita', 18.2907, 49.8343, 'Czech Republic', 'Ostrava', 'Dvořákova 7, 701 03 Ostrava, Czechia', '08:00-18:00', 'Education', 'Ostrava University offering a variety of study programs'),
('Psychologické centrum Bratislava', 17.1121, 48.1458, 'Slovakia', 'Bratislava', 'Gorkeho 6, 811 01 Bratislava, Slovakia', '09:00-17:00', 'Psychological Assistance', 'Psychological center in Bratislava'),
('Nadácia pre deti Slovenska', 17.1184, 48.1451, 'Slovakia', 'Bratislava', 'Staromestská 6/D, 811 03 Bratislava, Slovakia', '09:00-17:00', 'Volunteering', 'Foundation for Children of Slovakia, which organizes volunteering activities'),
('Politechnika Wrocławska', 17.0592, 51.1093, 'Poland', 'Wroclaw', 'Wybrzeże Wyspiańskiego 27, 50-370 Wrocław, Poland', '08:00-18:00', 'Education', 'Wroclaw University of Science and Technology'),
('Poradna pro integraci - Plzeň', 13.4050, 49.7384, 'Czech Republic', 'Pilsen', 'Klatovská 200/7961, 301 00 Plzeň 3-Jižní Předměstí, Czechia', '09:00-17:00', 'Integration/Support Organizations', 'Plzen branch of the organization providing support for integration of immigrants'),
('Park na nivách', 17.1165, 48.1486, 'Slovakia', 'Bratislava', 'Park na nivách, 811 02 Bratislava, Slovakia', '00:00-24:00', 'Leisure', 'Public park in Bratislava'),
('Muzeum města Brna', 16.6050, 49.1947, 'Czech Republic', 'Brno', 'Špilberk 210/1, 614 00 Brno, Czechia', '09:00-17:00', 'Other', 'City museum in Brno'),
('Brněnská metropolitní doprava', 16.6111, 49.2030, 'Czech Republic', 'Brno', 'Novobranská 18, 602 00 Brno, Czechia', '08:00-18:00', 'Transportation', 'Public transportation organization in Brno'),
('Ostravská metropolitní doprava', 18.2774, 49.8344, 'Czech Republic', 'Ostrava', 'Nádražní 20/1077, 702 00 Ostrava, Czechia', '08:00-18:00', 'Transportation', 'Public transportation organization in Ostrava'),
('Žilinský kraj - Krajský úrad', 18.7400, 49.2198, 'Slovakia', 'Zilina', 'Predmestská 71, 011 79 Žilina, Slovakia', '08:00-16:00', 'Government Bodies', 'Regional office in Zilina'),
('Plzeňská krajská vláda', 13.4041, 49.7389, 'Czech Republic', 'Pilsen', 'Malická 456/1a, 301 12 Plzeň 3-Jižní Předměstí, Czechia', '08:00-16:00', 'Government Bodies', 'Regional government office in Pilsen');
