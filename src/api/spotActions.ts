import { CommandContext, Context } from 'grammy';
import dotenv from 'dotenv';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import w from '../winston';
import * as ge from '../enum/global';
dotenv.config();

const uniCorsToken: string = process.env.UNI_CORS_TOKEN;
const uniServerUlr: string = `${process.env.UNI_SERVER_URL}/graphql`;

const { BTC } = ge.Symbol;

// ------ gql query paths:

const getActsPath = path.join(__dirname, '../gql/getActions.gql');
const getActByIDPath = path.join(__dirname, '../gql/getActionByID.gql');
const getActBySymPath = path.join(__dirname, '../gql/getActionBySymbol.gql');

export const getActions = async (ctx: CommandContext<Context>) => {
  try {
    const response = await axios.post(
      uniServerUlr,
      { query: fs.readFileSync(getActsPath, 'utf8') },
      { headers: { Authorization: `Bearer ${uniCorsToken}` } }
    );

    const { actions } = response.data.data.getActions;

    console.log('actions:', actions.length);
    await ctx.reply(`${actions.length} actions`);
  } catch (e) {
    w.err(`Error fetching actions: ${e}`);
  }
};

export const getActionByID = async (ctx: CommandContext<Context>) => {
  const id = '66535e783aea7c888f29fdb4';

  try {
    const response = await axios.post(
      uniServerUlr,
      {
        query: fs.readFileSync(getActByIDPath, 'utf8'),
        variables: { id }
      },
      { headers: { Authorization: `Bearer ${uniCorsToken}` } }
    );

    const action = response.data.data.getActionByID;

    console.log('action:', action);
    await ctx.reply(`Action details: ${JSON.stringify(action, null, 2)}`);
  } catch (e) {
    w.err(`Error fetching action by ID: ${e}`);
  }
};

export const getActionBySymbol = async (ctx: CommandContext<Context>) => {
  const symbol = BTC;

  try {
    const response = await axios.post(
      uniServerUlr,
      {
        query: fs.readFileSync(getActBySymPath, 'utf8'),
        variables: { symbol }
      },
      { headers: { Authorization: `Bearer ${uniCorsToken}` } }
    );

    const action = response.data.data.getActionBySymbol;

    console.log('action:', action);
    await ctx.reply(`Action details: ${JSON.stringify(action, null, 2)}`);
  } catch (e) {
    w.err(`Error fetching action by Symbol: ${e}`);
  }
};
