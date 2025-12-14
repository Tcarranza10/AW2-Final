-- Base de datos ABC - Gestión de Productos y Proveedores
-- Creado para: Examen Final AW2
-- Profesor: Andrés Senn

-- =====================================================
-- TABLA PRODUCTOS
-- =====================================================
CREATE TABLE IF NOT EXISTS productos (
    id SERIAL PRIMARY KEY,
    codigo VARCHAR(50) NOT NULL UNIQUE,
    nombre VARCHAR(100) NOT NULL,
    marca VARCHAR(50) NOT NULL,
    stock INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Insertar datos de ejemplo - Productos
INSERT INTO productos (codigo, nombre, marca, stock) VALUES
('CPU-001', 'Procesador Intel Core i5-12400', 'Intel', 15),
('CPU-002', 'Procesador AMD Ryzen 5 5600X', 'AMD', 12),
('MB-001', 'Placa Madre ASUS PRIME B550M', 'ASUS', 8),
('MB-002', 'Placa Madre MSI B560M PRO', 'MSI', 10),
('RAM-001', 'Memoria RAM DDR4 16GB 3200MHz', 'Corsair', 20),
('RAM-002', 'Memoria RAM DDR4 8GB 2666MHz', 'Kingston', 25),
('GPU-001', 'Tarjeta Gráfica NVIDIA RTX 3060', 'Gigabyte', 6),
('GPU-002', 'Tarjeta Gráfica AMD Radeon RX 6700 XT', 'Sapphire', 5),
('HDD-001', 'Disco Duro 1TB 7200RPM', 'Western Digital', 18),
('HDD-002', 'Disco Duro 2TB 7200RPM', 'Seagate', 14),
('SSD-001', 'SSD NVMe 500GB PCIe 3.0', 'Samsung', 22),
('SSD-002', 'SSD SATA 1TB', 'Crucial', 17),
('PSU-001', 'Fuente de Poder 650W 80 Plus Bronze', 'EVGA', 9),
('PSU-002', 'Fuente de Poder 750W 80 Plus Gold', 'Corsair', 11),
('CASE-001', 'Gabinete ATX con Ventana de Vidrio', 'NZXT', 7),
('CASE-002', 'Gabinete MicroATX RGB', 'Cooler Master', 13),
('COOL-001', 'Disipador de CPU con Heatpipes', 'Noctua', 10),
('COOL-002', 'Pasta Térmica 1.5g', 'Arctic', 30),
('MON-001', 'Monitor LED 24" Full HD', 'LG', 8),
('MON-002', 'Monitor Curvo 27" 144Hz', 'Samsung', 6);

-- =====================================================
-- TABLA PROVEEDORES
-- =====================================================
CREATE TABLE IF NOT EXISTS proveedores (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Insertar datos de ejemplo - Proveedores
INSERT INTO proveedores (nombre, telefono, email) VALUES
('TechDistributor S.A.', '+34 912 345 678', 'juan@techdist.com'),
('CompuSupply España', '+34 933 456 789', 'maria@compusupply.es'),
('Hardware Mayorista', '+34 954 567 890', 'carlos@hwmayor.com'),
('Electronics Import', '+34 996 789 012', 'ana@electronics.com');
