// server/index.js
const PORT = process.env.PORT || 3001;

const express = require('express');
const Sequelize = require('sequelize');

const app = express();
app.use(express.json());

const sequelize = new Sequelize('refumap_db', 'root', '3Hun$fo0ss5', {
  host: 'localhost',
  dialect: 'mysql'
});

const Location = sequelize.define('location', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  m_name: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  longitude: {
    type: Sequelize.DECIMAL(12, 8),
    allowNull: false
  },
  latitude: {
    type: Sequelize.DECIMAL(12, 8),
    allowNull: false
  },
  country: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  city: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  m_address: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  work_time: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  category: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  m_description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
}, {
  timestamps: false
});


const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  login: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});


// Логін
app.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ where: { login: req.body.login } });

    if (!user) return res.status(401).send('Invalid login');

    if (user.password !== req.body.password) {
      return res.status(401).send('Invalid password');
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Get location by ID
app.get('/location/:id', async (req, res) => {
  try {
    const location = await Location.findByPk(req.params.id);

    if (location) {
      res.json({
        id: location.id,
        category: location.category,
        name: location.m_name,
        time: location.work_time,
        description: location.m_description,
        address: location.m_address,
      });
    } else {
      res.status(404).send('Location not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Get all locations
app.get('/locations', async (req, res) => {
  try {
    const locations = await Location.findAll();

    const response = locations.map(location => ({
      id: location.id,
      lat: location.latitude,
      lng: location.longitude,
      category: location.category,
    }));

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Додати локацію
app.post('/location', async (req, res) => {
  try {
    const location = await Location.create(req.body);
    res.status(201).json(location);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Видалити локацію
app.delete('/location/:id', async (req, res) => {
  try {
    const location = await Location.findByPk(req.params.id);

    if (!location) return res.status(404).send('Location not found');

    await location.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Редагувати локацію
app.put('/location/:id', async (req, res) => {
  try {
    const location = await Location.findByPk(req.params.id);

    if (!location) return res.status(404).send('Location not found');

    await location.update(req.body);
    res.json(location);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
