import React from 'react';
import Cover from '../../shared/Cover/Cover';
import menubg from '../../../assets/menu/banner3.jpg'
import SectionTitle from '../../shared/sectionTitle/SectionTitle';
import MenuCategory from '../menuCategory/MenuCategory';
import useMenu from '../../hooks/useMenu';
import categoryImg from '../../../assets/home/chef-service.jpg'

const Menu = () => {
    const [menu] = useMenu()

    const salad = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const popular = menu.filter(item => item.category === 'popular')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Cover bgImg={menubg} title={'OUR MENU'} description={'Would you like to try a dish'}></Cover>

            <SectionTitle heading={'Dont miss'} subHeading={'TODAYS OFFER'}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            <Cover bgImg={categoryImg} title={'DESSERT'} description={"Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
           <MenuCategory items={dessert}></MenuCategory>

            <Cover bgImg={categoryImg} title={'PIZZA'} description={"Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
           <MenuCategory items={pizza}></MenuCategory>

            <Cover bgImg={categoryImg} title={'SALAD'} description={"Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
           <MenuCategory items={salad}></MenuCategory>

            <Cover bgImg={categoryImg} title={'SOUP'} description={"Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
           <MenuCategory items={soup}></MenuCategory>
        </div>
    );
};

export default Menu;