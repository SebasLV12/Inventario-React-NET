USE [master]
GO
/****** Object:  Database [prueba]    Script Date: 20/03/2022 06:08:51 ******/
CREATE DATABASE [prueba]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'prueba', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\prueba.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'prueba_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\prueba_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [prueba] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [prueba].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [prueba] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [prueba] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [prueba] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [prueba] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [prueba] SET ARITHABORT OFF 
GO
ALTER DATABASE [prueba] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [prueba] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [prueba] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [prueba] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [prueba] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [prueba] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [prueba] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [prueba] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [prueba] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [prueba] SET  DISABLE_BROKER 
GO
ALTER DATABASE [prueba] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [prueba] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [prueba] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [prueba] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [prueba] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [prueba] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [prueba] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [prueba] SET RECOVERY FULL 
GO
ALTER DATABASE [prueba] SET  MULTI_USER 
GO
ALTER DATABASE [prueba] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [prueba] SET DB_CHAINING OFF 
GO
ALTER DATABASE [prueba] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [prueba] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [prueba] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [prueba] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'prueba', N'ON'
GO
ALTER DATABASE [prueba] SET QUERY_STORE = OFF
GO
USE [prueba]
GO
/****** Object:  Table [dbo].[gestor_bd]    Script Date: 20/03/2022 06:08:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[gestor_bd](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[codigo] [varchar](50) NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[descripcion] [varchar](50) NOT NULL,
	[cantidad] [int] NOT NULL
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[gestor_bd] ON 

INSERT [dbo].[gestor_bd] ([id], [codigo], [nombre], [descripcion], [cantidad]) VALUES (1, N'ART0001', N'Detergente', N'Descripción', 4)
INSERT [dbo].[gestor_bd] ([id], [codigo], [nombre], [descripcion], [cantidad]) VALUES (2, N'ART0002', N'Comida Enlatada', N'Descripcion', 4)
INSERT [dbo].[gestor_bd] ([id], [codigo], [nombre], [descripcion], [cantidad]) VALUES (3, N'ART0003', N'Jabon', N'Descripcion', 2)
INSERT [dbo].[gestor_bd] ([id], [codigo], [nombre], [descripcion], [cantidad]) VALUES (4, N'ART0004', N'Shampoo', N'Descripción', 1)
INSERT [dbo].[gestor_bd] ([id], [codigo], [nombre], [descripcion], [cantidad]) VALUES (5, N'ART0005', N'Gaseosa', N'Descripción', 6)
INSERT [dbo].[gestor_bd] ([id], [codigo], [nombre], [descripcion], [cantidad]) VALUES (6, N'ART0006', N'Cereal', N'Descripción', 10)
INSERT [dbo].[gestor_bd] ([id], [codigo], [nombre], [descripcion], [cantidad]) VALUES (7, N'ART0007', N'Arroz', N'Descripción', 5)
INSERT [dbo].[gestor_bd] ([id], [codigo], [nombre], [descripcion], [cantidad]) VALUES (8, N'ART0008', N'Avena 3 Ositos', N'Descripción', 4)
SET IDENTITY_INSERT [dbo].[gestor_bd] OFF
GO
USE [master]
GO
ALTER DATABASE [prueba] SET  READ_WRITE 
GO
