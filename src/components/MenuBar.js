import React from 'react';
import styled from 'styled-components';
import { Link , withRouter} from 'react-router-dom';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { HiUserCircle } from 'react-icons/hi';

const MenuBarBtn = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 20px;
    padding-left: 15px;
    font-size: 35px;
    z-index: 5;
`

const SpreadMenu = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 415px;
    background: red;
`

const UserProfile = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 30vh;
    width: 415px;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    color: white;
    background: -webkit-linear-gradient(-1deg, rgb(255, 248, 129), rgb(109, 237, 255));
    background: linear-gradient(-1deg, rgb(255, 248, 129), rgb(109, 237, 255));
    box-shadow: 0px 15px 10px -15px #111; 
`

const Title = styled.div`
    font-size: 25px;
`

const Image = styled.div`
    font-size: 80px;
    color: #A8A4D2;
    padding-top: 10px;
`

const Email = styled.div`
    font-size: 22px;
`

const FreePlan = styled.div`
    font-size: 18px;
    justify-content: flex-start;
`

const List = styled.ul`
    position: absolute;
    left: 0;
    bottom: 0;
    padding : 0;
    padding-top : 20px;
    margin: 0;
    height: 70vh;
    width: 415px;
    background: white;
`

const Item = styled.li`
    text-decoration: none;
`

function MenuBar ({props}) {
    console.log({props})
    return (
        <>
            <MenuBarBtn>
                <IoReorderThreeOutline />
               
            </MenuBarBtn> 
            <SpreadMenu>
                <UserProfile>
                    <Title >WELCOME BACK</Title>
                    <Image ><HiUserCircle /></Image>
                    <Email ></Email>
                    <FreePlan >Free Plan</FreePlan>
                </UserProfile>
                <List>
                    <Item>
                        <Link to="/home" >Home</Link>
                    </Item>
                    <Item>
                        <Link to="/add" >Add City</Link>
                    </Item>
                    <Item>
                        <Link to="/login" >Logout</Link>
                    </Item>
                </List>
            </SpreadMenu>
            
        </>
    )
}

export default MenuBar