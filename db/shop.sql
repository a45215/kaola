/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : shop

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2018-09-29 16:44:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for shop_user
-- ----------------------------
DROP TABLE IF EXISTS `shop_user`;
CREATE TABLE `shop_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `mark` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shop_user
-- ----------------------------
INSERT INTO `shop_user` VALUES ('2', 'xiaolan', '123456', '1');
INSERT INTO `shop_user` VALUES ('3', 'liqing', '123456', '3');
INSERT INTO `shop_user` VALUES ('4', 'lefulan', '123456', '2');
INSERT INTO `shop_user` VALUES ('5', '江泽民', '123456', null);
INSERT INTO `shop_user` VALUES ('6', '蛤蟆', '123456', null);
