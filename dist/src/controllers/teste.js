"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postTeste = exports.inimigo = exports.createProvas = exports.adicionar = exports.login = exports.selecao = exports.cadastro = void 0;
const database_1 = require("../config/database");
const teste = __importStar(require("../service/teste"));
const uuid_1 = require("uuid");
const bcrypt_1 = __importDefault(require("bcrypt"));
const foto = 'data:image/jpeg;base64,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';
function cadastro(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        const { authorization } = req.headers;
        try {
            const token = (0, uuid_1.v4)();
            console.log('oi');
            console.log(body);
            const email = yield database_1.prisma.usuario.findMany({ where: { email: body.email } });
            if (email.length > 0) {
                console.log('erro');
                return res.status(500).send('email invalido');
            }
            console.log('oi2');
            const senha = bcrypt_1.default.hashSync(body.senha, 5);
            yield database_1.prisma.usuario.create({ data: {
                    token: token,
                    senha: senha,
                    email: body.email,
                    foto: foto,
                    nome: body.nome,
                    fase: 1,
                } });
            const usuario = yield database_1.prisma.usuario.findMany({ where: { email: body.email } });
            console.log('oi3');
            const add = [
                {
                    idUsuario: usuario[0].id,
                    poder: 150,
                    vida: 352,
                    foto: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhUYGRgaHBwcGhoaGhwZIRoaGhwcGhoaGhwcIS4lHB4rIRocJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHxISHzQsJSw0NDQ0NDQ0NDQ2NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EAD4QAAIBAgQEAgkBBwMDBQAAAAECAAMRBBIhMQVBUXFhgQYTIjKRobHR8MEUQlJicuHxM4KSBxUjQ6KjstL/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAqEQACAgICAgEEAAcBAAAAAAAAAQIRAxIhMQRRQRMiMmEFI3GRobHBM//aAAwDAQACEQMRAD8A8pRrQhWEGJiRrazDhDvIGaOvcyNhMY7eORyNpHedBmMFq4P2nDB1qW8ZOG66RnLgCXIrTgEWdZ3OOsm2VSFaNy+UdnHWOVh276fKDZ+htU/kj9kePf7RxXS522HfwkxYWBNtdtNe9ukbjKnuAbBdNLatqTaZP9CtfsiZgNh8ftOKSdDv8IlFhcziod72h2YNTrIwkd+okxVh49jG5r7xk37A0vlEREawj2W04Y3YvQycnbThMBjokitaRLHiMnQtNsR11MjaSP0jTtA2MkRzkRMUBhRRWigATWue0cREotFaAejkRN520VprBQyOEKwmFDXZvdHziZheyqAO28DYaBhFJHUbjzHQyMQ2ChWinTOCY1HI5RecuIwzIwWxzEdgPgLRVjdj0Gg7DSNoMbZjyJt30E7bYfGK+x10OQcz5SQoDEW0sdRykbrzG0NAbHEWkdUc5z1ka7aTVya1VDM05EdN5GdYzfIiXAma/acE7aPVYLGo4qx9p0CccwhqkRmOAjZIggYEgaSJTvItZLSOkIlnfV+MUdFNRrJSsaRJykYR4TOLQykmMtHJTJF9AOpjSsmqkZUHe/eI+B1THF7IQv8AkczOUGVo1jppB1IvcaQdm6YQ6WJ6Hfw8ZEySfNfvGMn9vtMmZoit4iLKOsaYjHAMInGNxExj8PhGYXtYHmdNOo6wiE4Gijwue5jau3c/T+8JqU/EfP7RgolrAan81iJ8lGuCNaml/j95wPY+BkrYN1Oo+BBg5UjQi0cSmuyS19oqll8T0/U+HhIlf8+s6y31gYURnXeLLHCOtFbGSGqscBHKkfaFBogcxonXOpiEIr7OASRR+eU4ojxtBfIUqQPSXSILZj217xwHIaSNwb68/wBIxMmzCKRZYoTBnruXzM5mvOvRI3EjKxd2P9NfA4ic8I1iZ1TBJhUWjoEVo8ERwW8ndD6kYaOz9Y4pI9prA4tDnUHfQ9fvIWptoLXJ2trftHK19t+n2htJwmgAJ5kk2v0Cx7oGqY7DYMLuM7+AuF7dT4zrsb63HeP9e5FsxA5gaC3TSSF2Omg6dD4CI5DqNATv4SZXygADXn4nvBqmh067faTltzz+nWBmR1nPI/CR1EYDUG3jIqz9I+g5ykTO0FUwV0yi/eNWoQLdfpCnpZhY3+0GrIQZaMkyE4uPJxFufAR6mR3kyqQcp5bwSQYOyRRGVH005yVRBHFiRMij4GxwESiOAmbFSOqI9+k6o5xhUjxgj7NLhUcInGWPQjaPIsD4RhKI9IpDlimAW+W8grUbc5amkLSL9nvf6SOx06sqCkaUhbU9SJEyxkwUD2k1Jxtz5xOkjtM0mjcphTCQVJ2nV5HblI3qC+msWMXdGnJUQ0veHgYfg0BOu25gPO8Mwz6d4+VOiWKrGviTfYW108Oh6yWhXBFj5SJ6P4fzWM9XbeJxRXlMJpn2yen1jjS5xuGQ3A5H7byxWj7J0/SLKVBUbKapTObeSon+BDjhjuNzvJTw8j2jby/N4HNDRgyBqYA1OvQcvCQNhM51vblLnh/Dc6O3raaKi5nZidtdFVfaaAcGD13ZVQsFucyg2tyuDteTUpU2vgs4wTUZfJX1cOE5X/mJ+g/WDZixJ66mXWNwLscoGnMnQD7yKthkQDmRtfmx3Y+HQS8cq1V9nPLA1J1wgZEssBZdT3hzuALsd4HmBjpitLo4BJqaXippfxjSrm9raQPk3CDUClRYDzkTJaDguuuklp1GY7wrgV8nHpg9ZHiEYCxsb8xDGQ9F+cEcEuAeXT4xrBJEFj0ill+1/mk7NYNV7Ds5PKJamtrSR7CRXkDp5ERrbSQ1sIbEj4QlBCF2JJt3i3QVEorSNlljiFUk22/LwN0lUxWgU9Ixl5yUiRmUiyE1YqQBO0tKeFIFyQPDwguFwrswtYL/ABHp4DrD8c2RfaYkW00AvJZZOUtUy2GCjFykjhoXGguPGQ08LcnS1t5X0cSHb2mKjlrp5neaGhTULnzoVP8AOtxy2OpEnJSiNFxmQYfBMTdRcg69jpLjDUCTlsQeYMJ4VRILEajTx6/eW37N7aNyIN++hE5Z5LdHRGCRUU8Ccw01Av8AO0H4tWp0sqsSoY6kC5tzyjm30msOECuG6gjvfUfSZXjHC2xD5l1yHY30uSeU0JJyW3RpXq9Srx2POL9lFpYbDICUQtlzW3ZmAzVn68heRYfF1cE5VKiOu4ai2Ya676E77Q6jwuouhta9+Z7kXlzw3gFFyGqXYb2va58SOXhOiWWKVVwQjjknd8glfM9L1ptcnUC2mnMDYzO46mzAsu4B5XJPK09G41UoKmSmijT90bzJthwNOpOnSc6nq7O2OP6kKfBjTQaxY33t11sSY0rNZxDCqEyqupb4fxN33mSqNcnkBOzFk3Vnn58P0mkPpudQNusMw9IZdReABul4XgavIyjIx7J/2dP4R8ow0cpuB9IUw7SMi1raxbKURmtbdWHlBUq2LNbeFYkEKTcEbacoMo0tGQklzRF6/wAIoVkTpFDYNS2tEqiQ+s0kZeSo6XIMaoF8ZBUrFpBeItGSSFcmx8ZWe2kaGkWIfXlCKpUiNlklEsuq6jnpf/EhzmOp4h1N1ax8JmrQFJXZcYaoSMxXb82ldjmzElv7ASwwOMapdWsewt8eVoPieGO1zy8Jzqoyd8HTLaUE1yUSJmJt9JdYFKKr7dBXvcXZ3zajTKqEC4Ot5zD8LspYg9AOvSavBcG9UmfIC5Gl9SO0eedR6Jw8dvsynDuIVaDZSWCj90jUCeh8N4ilRFbOtza4vueqj9O8wfFlytlY3djdz0A5QJcUAVK3BB0P3k54lk+5cFFLX7Wz2iriUWlb3nvtsQPPle0zVPCuqB2qNTJ9ohDpfYXvvYD6znA+NpXAR/ZcAc/eK8r9CPjaY3jXEXqO5LkICbKCeZ6DftIQxty1YbpNnovDuKPVzKCj5bC+W2a9/np84S/CXfZcvaZbhPpFSwVAf+BqzuL5BdFXqXqMvtMeiiygWlNxD/qLjfWZqd6CD/0/9QH+ovue1o68aUpfoSXkKKpI2lbgbC5+ZlY+BUG/Ic5Vp/1LrumWpSpsebJem1udl1UzR4F0xNBnQ3UqR2Ntj0N+Uhmwzxu317OrxvJjONN8+jKcfqhA2u+g85jm3/N5q/SfDHIjHrbe/hczKstzbr+m87vGVQOPy57z/oOSnfWTLQ5jSFYelCRS8I7yCxw2iFW08e0aTJXS0Y6eMydmlFoFxTXsLHn+fWMLjNYfOJ6gzHXbT8+cfhQpOrDMToJTpE6bZy/iJ2F/s4/BFBaG0Y01Iw1JGojyLG0Ax1XMk35zlNPlHgQWGhKkgqoLmTlwIG9bWFWLJpDggjWWRtXnaeIGYXBIvY2316eMNMW49Fhwinepe50HL6TbYairKPYNupmewGFAF1sQbXO3xE1uGwpVL7+ewnmZ57SPUwx0xpMrsRTRbDTT5R+L9IKVFLk9huSfAfrKfj+M9Wt7XNzbvMJicQztmY3J+nhK4PG3VyfBDP5Sx8JWw3HcR9Y7EAm5vt9/rIaYN9SB53PwEgputxmvbmIbheIIgI9UGIvlJ5Hke40noapKkjzt3J3JljQwVZB6xUew12tp23+U2vCPQTEmmaprpQLKWPsZyqkE6u3u6b5RMbhfTLFpRekhVc/vOF9q3RSTZR1sJVpiMQwKmrVKNoyl2s3gRexiafLodTk+I2WNZ8IaNQvUqVMRdgpObLucrIbm4O5zW7SmxFcGwQADKAdB56nXePqYFlXMRoIZ+x5Kas2hIva299QPGMml+wOEm6fBXVsNlVXGzX+U9P8A+lbesw9dBfMhDN4ggjT4TN8T4G4wtO49ormPe9yJB6EcSfD1mNMAs65LEXG+5t0kcv8ANxNLsKi4ZFXybCvwdaoYMLjXQ7iYTjfCGw7galD7rdd7jvpPYuFUbi5+Mo/+oHBi+GZ0HtIwe3hs3yJPlI4ZONJl8qTto87wx2hqGVuGO0PQx5rkrhdo5VWVWJrWY6w/HO1sq3ufkB9JUPTlMS4tiZ6shUE7Qs1FRTlW7WtmPLtIlpG17yNzfSW7ORtp8HPWHqfjFO6RTUHdhaXAuTGmoSZD65m2WOTDvvpFr2Zy9BaObWvHlh1EG9WeZ+E7kPRoKDsPqVRbeDNUEe4PQ/KDs/gIyROUhM1zHUkLMFA1MjLnw+Amh4BgtM7bnbtBOWsbDjjvKixwiFALknTU85qOEY9bZSd+d5RikWMIThh3BsZ5eTW7uj2IP7dWrRz064WRQNQC6736TzRU1nqGMrV/UPRYh0dSuu400IM88qYWzlCLEbfC87vElcWjzvLg1JMgo4fNpzjloWazAj7yZU8vHpLvA4tCpWtSZ0sLZTax/i0IIMs5tCRxqznDuDqwuSLeXzltg+FIpJZlC+MGo0cN6ioFXFeuY3ptqAnRWF7EHmdTNDV4phg9CquFSk1EDMatTIHYCwLImbMQdbkXvIS5+TtjNRXEf8oBw3BTiqxoKMiIA7vVVluoOyq1jrbrJ6HCmxOKUIgXD0m973kZl0ATkbeYFpYY3jaYk5quatyVBelRW50Bt/5Kl+mgNtppcBa2Qavl9twAqon8CKNFvsBvzMjKdcISTlL7mCeldOmMG3IAewed76nsZ5l6EoGxIHVW8tppPSbi4xNYBNKVO6qOTNsSAOQGnxmW9D6wTFjuwH55SmFVCSI5E04t+z2rCIAoAhGLwyujKdiCD2MAwuJVULsdB8z0gqcULm73t0FrCc0pxj2yqhKT4R5xxb0ebDE21S7WPQaZflf4QFJ6Vxc06qMhFrg7/mk87xWHKOVPkeolI5FNdloRce0CYprKfhKht5cYxbqIEafadGJ0jm8hNyAnPiZARCHWRMJ0oSUaXJFFHRTErRc+ztlP0kdRR1t8TCsW7n2rHta3zMCzjmB+eJkkGXBzMv8AF+n6SJ6q9GPn/aSvjAun0AEHqYlm8BGSJtkLtf8Aubxlo+0ciXP2j2JVk+AwhdwLac5uMBhbACVnC8OqoLWPUjXXvNHhKc83yc1nreLhSRLRogQxEEaq2hdCn4TzZzOykkMfDB1OnLSeR8crH17sP3GsOy6fee1Mllv4TxHFe01S/MsfPNed38Nlbk/6Hn+Y7SQY+FJGZRodQPDkYOCV3F4Zw2ofVob8rfAwpHVr3AndKTUmiMUnFNMrVrZtrdtQZbcAakGBKXYdbfWAYp6SA2UFjzB2gVPFBTdUN/FvtNrsuA7qL5PTMN6Q0Vr3dFKqLC4zZLjVlA3MzfpX6Uq7suFLIre+ym2bTUCZivj3bTRQd8otfudzBgJo4lF2wSy31wG4DGFbKfd5eH9pynV9ViQ/7uYN/tY3/WCiTuMyXO6C3+0/aPSXPsS21XrlHqT4q6oBtv8Ab6wimJl/RrG+spKpN2T2T4i/sn4WmrprpPE8mLjKmeviacE18kGM2mU4sp36H/ImqxzezM1iWveNgdcjNXwU7KGFoFUGtvK8LYEaDraQvRCEEm5Pwnp4zlnGN3L4AK4AuekDZ7ixAvyP36wvEm8DZZ1I4s01KTS+BZh+CKM9X4xQ0Qt+gx2PMk+d4I4IPPwmuwHo6NC9zfYDS/8AaHMiI2Smiluemg8+ch9VJ8FPpN9mCynmDJUE1nEOGMVLuUWwuTY/l5kcRfyjxkpdEpQcSUCOvaCKxAvJ6BZjYDWM0BM1nDAFVF6D5mabCsbTKcGVtM245TY4WnYCeR5Lp0e746WiC8PRvLWjTIgeEMsUbS88ycnY2RuyDHNZG7GeMcToFKzrbmxHZtRPXsdXHL/M8043TPrgVUnXYAny+s9H+Hy1b/ZyeRj2hfoocLVZUsOZP1nM5ta5tvJfV2DC3uuR8QPtGFZ7EuzzorgiIitJcsWWCxqIwscBH5ZyY1CAj6bWNx+eEYDC+HYYVKiKTlDMAT4czBJpK2NFW6RLw6o1BhXQEpfKw6A7j7GepYaororqbgi4PeF4bhlMUfV5Rky2y25feY7BYg4KucK5JpMb0mPK/InynkZJryL1XK/yj0Mf8vj4/wCl7xIjLMlWfUzW46mSl7aeJ/TlMXVuHYQYFaZVyqQM7G9gOfPpb+0HxT3Pjp5dIXVGU5iNbWjKdAbuRfpf7T0oNRjZ52faU2kVpw5Otv0kb4cD94S3rW5C/e8r6q35CVjJsSWsY18g3qR1+cUkyn8t94o/JLZnoRUISXqoCRoAeXWx1jEwwL5016ncN2ttK3C1EVyHcEtYo/I8irHkdPnLLjuIFKmj0aaHcM5Ga2mhttrr8Jw07o6XIqfTTFsVRcgRSbmwtcjT4feY90BBllxHiL1RZ2LdNAoHYAASuGHedWNaxpkJu2D42mVYKbaKu3iLyKm5XUHWG18KzWJ3At5DaDfsjX/WWTVEmnZpeEmyb3037n6zWcOxd1YnlawPbb4gzCcPrlBlPhbyN7fKW9LHFGUg3U7j6zzPIxOUmez4s04L+xuuHYtWW5IudQPDSR8W4nkX2RdjYAcrnaYzBcXII/lO3Uai3w+kb6QcV9pGRtrMB8RqJyR8V/USZebiouSNZSp6BncOx9o6+6N9tlXlD8NTRbt6k6C+mS+nzMx+B9JGC2dFcMBr7reFiIbwjEE1w6lslmvc9RsRff7Ts+nqedKTkVHpXRppVdqYGSuqso5qyNdrdxflzMzWTy85Z+kK2xDgbLYL4C17fMwKhRzN9R0/tO2P4o5+nQ5KAPM/CSDCjkTNFwfhCVFYZrMNhtNHw70UzaETkn5MVJo68eFa7S6PNqmHt/iCv+aT0b0i9EjTGYbH69O8xGK4cynaWxZoyEy4uNo9DOFcJqYg+yLKPecjQeHiZpm4MuGyMBc5gMx1P9oHwjFmgotexF2Wx97mfp8J3inFXqCwUgb6/KQyvLOeq/Epg+ljjtLs9Bw+LzJmF7Aanp5zHelZFYFR7yjMp5ix/wAybAcdy4ZkNwdQR3lPgcTesWf3TYHXVU1vOfF4zxz2XwVeWDVe/wDRpMBxP12FRj72XK3caG8zSPeoT46dhvBsLjgtKqqkhTUOTsSbeWkDq4vLbKSWtr35zohgalKiUsiUU2XpuXLAXNvZFgbAaE69Tz+8ITClhdgwJ8BIfRvCuTnaxvprc2A5Caaphl3IN7aWb9JpPXgW4vlGRx1ALuRaVji+wNpr8dw+kiZn9nNzJv5KN7naVb8PqOPYT1acs5Nz5b2lsc1RzZY2yjyzstf+xt/GP+LRSu69ktH6Ba9B10tceOkdg+JFPZZLrrcWGoIIIbkRLWg4dcxIt0trFiMMhOigjx/QcpLZdM6HF9orFp0WN6eZb/uMt7dmHLvClwY6RfswBFhbtC1IGpMEpejRjXYN+wKeVpw8KWErigdEBPbb4wlEdrcvKDZoOqM/iuHW2gVSi03yYJbe0R5wfE8HB1A07ATLKvkyTj+LMA6ssYVvcn4TXv6PBz7LC/xjqXoY9r5wfAjbzvG+pBGTm+GzIEuTcnbb7SzweKZNR71rW5Hv4zRYj0SKqSGYtbYUz9b2EonwTBrWPwhU4SBTj0AO5dizbk6wtsESoZTZxt0N9wfCOp4A5tZaU0sNrzSnr0PGG3ZFwfFC9rFXX3l+3UT0DgvGwg1nnuJweezD2XGzDfseohPD8czXVvZdd16jky9RObLjU/uR1x1cdJm29IuMLUWw2H5+kw9emCZYeqqP7qO3ZWP0EcvBa7f+mw/qsv1gxx17ZpOEY6x6A8Oinf4SWpRXTSWFD0Zdjq6r2BY/K31l7hfRqkvvu7npcL8hr847mjnbijKJwxGIzXA52Fz8JncdRFSsKGGBZmNj/KOdzPVcdw5GpvTp5UZlKhi2q35kA3MoOC8IxuEAWnh8I45uCyMe5IJhx5O38/BGck+kRj0NWnhwLZiF172veef42hkci3OewPisSV/8mEQ/0VQ2n+5RMF6V4MtdlpGiwO119oWP8O0bHKW3LFl+JJwLFPl9miWPU6CWVXFYncUkH8tmP1O8xWFoVTsrtb+G7fSGpTcjUsD0108oJ4/uLY5Jouqq1/fa6HlZdR2tqB5xn/eXS4JU9SwIPxzSsQVgfYNXupcfSSt+0c8572b63ixSXYZcroM/7438K/8AN/vOyv8AWVun/wAaf/mdj/aTplPwjjGQZWMtRxFm1RbjqdJlauHINxDMG4IsSfLSdMoRfKIwnJfay6qYkk2vc9gB5R7I4GZh7PeV4cDZT5mdLt0H1+snXopZeYLEjpaXdHE291bnxNgJk6eLGgsF6nVvlpCHx6qPZbMexH2k5QsazVpinN9fhtGVsTUGqinl55i9/HQKQPjAMBiiy+zcA8yLfAy3wwsNf8SMlQTmFxOzewLb5RceRsD8pYjGgWy21Jv7Q6QNcOu8fSZCMwOmuuvLfQi8k+R+C0TE35RzIDrlvKnDcTpk2zEc9VYaDflG0vSqgbhQ5ItuAt/Nj52h1YjT9FsaajdR8INiOGoRdKSZv57gH/jtHLxFDe3vDr16Ei/WEYSorMfaNyPd0Ki2+XS8W2g8opnouu2BRj/I6Ef+6x+UkwHDqr1kq1KSUUQMFVWDO2cWIYgABRvvvNMtITrDlG3foVysHRnvZbW8f8yh9J8Y6Bcr5rH2wtxlXxIPbSaF6A3PzlDiuFtVcqzlad9AoHkfGbrkaNN8lfR4+CVRLsTzNlF+gHM95b4bEm13Ovf72AlFi+AUKbe3iLDcaAN/xAJg7pg+dWq565W/VRM+eiusX0ac8XpLu6D/AHAn5QTFekwUZkBdb2LDQLqNNeevaURTC6Wzgf0n7wSvh6TMdcqjUG1j2N9/KbUKxxbNThPSOk7e0zr4Zgynw01B8pX+lCq6Z0Nxv1mVxOGCn2WzDk1rf3EDxOLdRYMfzl4ymNfcqJ5caStFj6O4/JUA5XnquCp0qqjOiNpuRr8Z4FSxbK9/Ger+hnFAyKCddLyvkRa+45oc8FzjfRJWYtSbKDsrXIHZtTbuJRcS4FiKSklMwH7yHMPhoflN6uIHeCcVrnIbGc8XbH3kuzyv17dD8IpofWH+MxS1I31GeZ1Nvzxg2G96dinWumTfaLFY99p2KSRQiM40UUcVmx4N7if0j6S5iinJPtlV0FJzncZ/pnsfoZ2KRD8ozGK9x/6F/SVdD/SP9Z+hiil10U+Q/h+6/wBJ/wDtNRwfbyMUUhM0ujRrzksUUC6OchxGxgtX3/8Ab+sUUzGiedYz/Vqf1mcbYRRSiOyPSGPv8IsVt5j6xRRmGPyBP7794Hj9vOKKGH5ISf4soanvT0b0B2P50iinT5P/AJnBD8mem4Lb88YDj/8ATP8AU36xRTgx9jTMhFFFOkmf/9k=',
                    idInimigos: 1,
                    nome: 'Besta',
                    fase: 1
                },
                {
                    idUsuario: usuario[0].id,
                    poder: 150,
                    vida: 352,
                    foto: 'data:image/jpeg;base64,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',
                    idInimigos: 2,
                    nome: 'Guerreiro',
                    fase: 1
                }, {
                    idUsuario: usuario[0].id,
                    poder: 300,
                    vida: 250,
                    foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmrHxXaWg81_E-2gneusY0CFwRPk0OBRmW9w&usqp=CAU',
                    idInimigos: 3,
                    nome: 'Arqueira',
                    fase: 1
                }
            ];
            console.log('oi4');
            console.log('aqui');
            console.log(add.length);
            console.log('aqui');
            const inimigos = yield database_1.prisma.inimigos.findMany();
            for (let i = 0; i < inimigos.length; i++) {
                console.log('oi');
                yield database_1.prisma.inimigo.create({ data: {
                        idUsuario: usuario[0].id,
                        poder: inimigos[i].poder,
                        vida: inimigos[i].vida,
                        foto: inimigos[i].foto,
                        idInimigos: inimigos[i].id,
                        nome: inimigos[i].nome,
                        fase: inimigos[i].fase
                    } });
            }
            res.send(token);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
exports.cadastro = cadastro;
function selecao(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('oi');
        const cards = yield database_1.prisma.card.findMany();
        console.log(cards);
        res.send(cards);
    });
}
exports.selecao = selecao;
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        try {
            const token = (0, uuid_1.v4)();
            console.log('oi');
            console.log(body);
            const usuario = yield database_1.prisma.usuario.findMany({ where: { email: body.email } });
            const senha = bcrypt_1.default.compareSync(body.senha, usuario[0].senha);
            if (usuario.length === 0) {
                console.log('erro');
                console.log(usuario.length);
                return res.status(500).send('email ou senha nao existe');
            }
            else if (!senha) {
                return res.status(500).send('email ou senha nao existe');
            }
            yield database_1.prisma.usuario.update({
                where: {
                    id: usuario[0].id
                },
                data: {
                    token: token
                }
            });
            res.send(token);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
exports.login = login;
function adicionar(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        try {
            const { authorization } = req.headers;
            const token = authorization === null || authorization === void 0 ? void 0 : authorization.replace('Bearer ', '');
            const usuario = yield database_1.prisma.usuario.findMany({
                where: {
                    token: token
                }
            });
            for (let i = 0; i < body.length; i++) {
                console.log('oi');
                yield database_1.prisma.deck.create({ data: {
                        poder: body[i].poder,
                        vida: body[i].vida,
                        maxVida: body[i].vida,
                        nome: body[i].nome,
                        foto: body[i].foto,
                        idUser: usuario[0].id,
                        idCard: body[i].id
                    } });
            }
            res.status(201).send(token);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
exports.adicionar = adicionar;
function createProvas(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const credenciais = req.body;
        const { authorization } = req.headers;
        const token = authorization === null || authorization === void 0 ? void 0 : authorization.replace('Bearer ', '');
        console.log('token seu');
        console.log(token);
        const usuario = yield database_1.prisma.usuario.findMany({
            where: {
                token: token
            }
        });
        try {
            console.log('oi');
            const deck = yield database_1.prisma.deck.findMany({
                where: {
                    idUser: usuario[0].id
                }
            });
            res.send(deck);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
exports.createProvas = createProvas;
function inimigo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const credenciais = req.body;
        const { authorization } = req.headers;
        const token = authorization === null || authorization === void 0 ? void 0 : authorization.replace('Bearer ', '');
        try {
            console.log('inimigo');
            console.log(token);
            console.log('token');
            const usuario = yield database_1.prisma.usuario.findMany({
                where: {
                    token: token
                }
            });
            console.log(usuario[0].email);
            const deck = yield database_1.prisma.inimigo.findMany({
                where: {
                    idUsuario: usuario[0].id,
                    fase: usuario[0].fase
                }
            });
            console.log(deck[0]);
            const deckk = [];
            for (let i = 0; i < deck.length; i++) {
                deckk.push({
                    id: deck[i].id,
                    poder: deck[i].poder,
                    vida: deck[i].vida,
                    nome: deck[i].nome,
                    foto: deck[i].foto,
                    fase: deck[i].fase,
                    indice: i
                });
            }
            res.send(deckk);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
exports.inimigo = inimigo;
function postTeste(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        const { authorization } = req.headers;
        const token = authorization === null || authorization === void 0 ? void 0 : authorization.replace('Bearer ', '');
        try {
            const usuario = yield database_1.prisma.usuario.findMany({
                where: {
                    token: token
                }
            });
            const add = [
                {
                    idUsuario: usuario[0].id,
                    poder: 150,
                    vida: 352,
                    foto: 'data:image/jpeg;base64,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',
                    idInimigos: 1,
                    nome: 'Besta',
                    fase: 1
                },
                {
                    idUsuario: usuario[0].id,
                    poder: 150,
                    vida: 352,
                    foto: 'data:image/jpeg;base64,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',
                    idInimigos: 2,
                    nome: 'Guerreiro',
                    fase: 1
                }, {
                    idUsuario: usuario[0].id,
                    poder: 300,
                    vida: 250,
                    foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmrHxXaWg81_E-2gneusY0CFwRPk0OBRmW9w&usqp=CAU',
                    idInimigos: 3,
                    nome: 'Arqueira',
                    fase: 1
                }
            ];
            console.log('post');
            //console.log(credenciais)
            console.log(body);
            const ids = [];
            for (let i = 0; i < body.golpe.length; i++) {
                if (body.golpe[i].loteId !== 0) {
                    const id = body.golpe[i].loteId;
                    ids.push(id);
                }
            }
            yield teste.varificar(body, usuario[0], add, ids);
            const inimigo = yield database_1.prisma.inimigo.findMany({ where: { idUsuario: usuario[0].id,
                    fase: usuario[0].fase } });
            console.log('aqui');
            //console.log(usuario)
            console.log(inimigo.length);
            console.log(body);
            for (let i = 0; i < inimigo.length; i++) {
                console.log('for2');
                console.log(ids);
                const random = Math.floor(Math.random() * ids.length);
                console.log(ids[random]);
                const deck = yield database_1.prisma.deck.findMany({ where: { id: ids[random] } });
                console.log(deck[0].vida);
                console.log(deck[0].nome);
                console.log('dano');
                console.log('............................................................................................................................');
                console.log(inimigo[i].poder);
                console.log(inimigo[i].nome);
                console.log((deck[0].vida - inimigo[0].poder));
                //console.log((deck[0]))
                yield database_1.prisma.deck.update({
                    where: {
                        id: ids[random]
                    },
                    data: {
                        vida: (deck[0].vida - inimigo[i].poder)
                    }
                });
                const deck2 = yield database_1.prisma.deck.findMany({ where: { idUser: usuario[0].id } });
                for (let i = 0; i < deck2.length; i++) {
                    console.log('for delete');
                    console.log('oi');
                    if (deck2[i].vida <= 0) {
                        console.log('deletado');
                        const deleteUser = yield database_1.prisma.deck.delete({
                            where: {
                                id: deck2[i].id,
                            },
                        });
                    }
                }
            }
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
exports.postTeste = postTeste;
