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

const Marker = sequelize.define('marker', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  longitude: {
    type: Sequelize.DECIMAL(9, 12),
    allowNull: false
  },
  latitude: {
    type: Sequelize.DECIMAL(9, 12),
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
  address: {
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
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
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

// Get marker by ID
app.get('/marker/:id', async (req, res) => {
  try {
    const marker = await Marker.findByPk(req.params.id);

    if (marker) {
      res.json({
        id: marker.id,
        category: marker.category,
        name: marker.name,
        time: marker.work_time,
        description: marker.description,
        address: marker.address,
      });
    } else {
      res.status(404).send('Marker not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Get all markers
app.get('/markers', async (req, res) => {
  try {
    const markers = await Marker.findAll();

    const response = markers.map(marker => ({
      id: marker.id,
      lat: marker.latitude,
      lng: marker.longitude,
      category: marker.category,
    }));

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Додати маркер
app.post('/marker', async (req, res) => {
  try {
    const marker = await Marker.create(req.body);
    res.status(201).json(marker);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Видалити маркер
app.delete('/marker/:id', async (req, res) => {
  try {
    const marker = await Marker.findByPk(req.params.id);

    if (!marker) return res.status(404).send('Marker not found');

    await marker.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Редагувати маркер
app.put('/marker/:id', async (req, res) => {
  try {
    const marker = await Marker.findByPk(req.params.id);

    if (!marker) return res.status(404).send('Marker not found');

    await marker.update(req.body);
    res.json(marker);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});