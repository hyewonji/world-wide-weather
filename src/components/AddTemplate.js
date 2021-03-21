import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import WeatherCard from './WeatherCard';
import MainWeather from './MainWeather';

const Main = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
  width: 90vw;
  height: 82vh;
  display: flex;
  @media screen and (max-width: 768px) {
    height: auto;
    flex-direction: column;
  }
`;

const CitySearchWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 70px;
  border-radius: 20px 0 0 20px;
  background: white;
  overflow: scroll;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 20px 20px 0 0;
  }
`;

const SearchTitle = styled.div`
  font-size: 30px;
  font-weight: 600px;
  margin-bottom: 40px;
  color: #005659;
`

const SearchCityForm = styled.form`
  position: relative;
  width: 80%;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 83%;
  padding: 23px;
  border-radius: 50px;
  outline: none;
  border: none;
  box-shadow: 0 0 2rem 0.15rem rgba(0, 0, 255, 0.1);
  font-size: 15px;
  color: #131f69;
  text-transform: uppercase;
`;

const SubmitBtn = styled.div`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: -0.35rem;
  height: 75px;
  width: 75px;
  border-radius: 50%;
  outline: none;
  border: none;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 2rem 0.15rem rgba(0, 0, 255, 0.1);
  color: white;
  background-color: #31feae;
  font-size: 50px;
`;

const WeatherCardContainer = styled.div`
  display: flex;
  align-items: center;
  display: ${props => props.showWeatherCard ? 'block' : 'none'};
`

const FollowBtn = styled.div`
    padding: 17px 20px;
    margin: 0;
    border-radius: 30px;
    background: #2B244D;
    color: white;
    position: relative;
    bottom: 70px;
    display: ${props => props.showWeatherCard ? 'block' : 'none'};
    &:hover{
      background: #32FEAE;
    }
`

const AddedCard = styled.div`
  display: ${props => props.addMode ? 'display': 'none'};
`


const CurrentWeatherWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 70px;
  border-radius: 0 20px 20px 0;
  color: white;
  background: #9591A6;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    border-radius: 0 0 20px 20px;
  }
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: solid 1px white;
`;

const Date = styled.div`
  font-size: 15px;
  margin-bottom: 20px;
`;

const Image = styled.div`
  width: 100px;
  height: 100px;
  padding: 10px;
  margin: 60px;
  background-size: contain;
  @media screen and (max-width: 768px) {
    margin: 30px;
  }
`;

const Temperature = styled.div`
  font-size: 70px;
  margin-bottom: 20px;
`;

const City = styled.div`
  font-size: 28px;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`;

function AddCurrent({ onSubmit, onChange, onClick, nowCity, searchCity, showWeatherCard, addMode }) {
  const today = new window.Date();
  const dateString = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "short"
  });
  const dayforamt = dateString.day%10;
  const { city, weather, temp : temp } = nowCity;
  return (
    <Main>
      <CitySearchWrapper>
        <SearchTitle>
          SEARCH CITIES
        </SearchTitle>
        <SearchCityForm onSubmit={onSubmit}>
          <Input 
            name='keyword'
            placeholder="SEARCH CITY"
            onChange={onChange}
          ></Input>
          <SubmitBtn onClick={onSubmit}>
            <AiOutlineSearch ></AiOutlineSearch>
          </SubmitBtn>
        </SearchCityForm>
        <WeatherCardContainer showWeatherCard={showWeatherCard}>
          <WeatherCard searchCity={searchCity}/>
        </WeatherCardContainer>
        <FollowBtn showWeatherCard={showWeatherCard} onClick={onClick}>ADD CITY +</FollowBtn>
        <AddedCard addMode={addMode}>City has been successfully added!</AddedCard> 
      </CitySearchWrapper>

      <CurrentWeatherWrapper >
        <Title>CITY OF THE MONTH</Title>
        <Date>{dateString}
          {dayforamt === 1 
            ? 'st' 
            : (dayforamt === 2 
                ? 'nd' 
                : (dayforamt === 3 
                    ? 'rd' 
                    : 'th'))}</Date>
        <Image>{MainWeather(weather)}</Image>
        <Temperature>{temp}°</Temperature>
        <City>{city}</City>
        <Description>{weather}</Description>
      </CurrentWeatherWrapper>
    </Main>
  );
}

export default React.memo(AddCurrent);
