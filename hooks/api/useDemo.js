import { useMutation, useQuery } from 'react-query';
import { API } from '~/core/api/config';
import api from '~/core/api/api';
import { getSession } from 'next-auth/react';

async function postContact(body) {
    const formData = new FormData();

    for (const key in body) {
        formData.append(key, body[key]);
    }

    const { data } = await api.post(API?.CONTACT?.SEND, formData);
    return data;
}

export const usePostContact = () => {
    return useMutation(postContact);
};

// with header Bearer token
async function getListBrand(lang) {
    const result = await api.get(API?.BRAND?.LIST + '?lang=' + lang);
    if (result) {
        const { data } = result;
        return data;
    }
    return {};
}

export const useGetListBrand = (lang) => {
    return useQuery(['list-brand', lang], () => getListBrand(lang));
};


async function getListGroup(filter) {
    let session;
    await getSession().then(data => session = data);
    filter = encodeQueryData(filter)
    const result = await api.get(API.GROUP.LIST + '?' + filter, {
        headers: {
            Authorization: 'Bearer ' + session.user.data.token
        },
    });
    if (result) {
        const { data } = result;
        return data;
    }
    return {};
}

export const useGetListGroup = (filter) => {
    return useQuery(['list-group', filter], () => getListGroup(filter));
};

async function postJoin(body) {
    let session;
    await getSession().then(data => session = data);
    let url = API.GROUP.JOIN;
    url = url.replace(':code', body?.code)
    const { data } = await api.post(url, body, {
        headers: {
            Authorization: 'Bearer ' + session.user.data.token
        },
    });
    return data;
}

export const usePostJoin = () => {
    return useMutation(postJoin);
};

async function postExit(body) {
    let session;
    await getSession().then(data => session = data);
    let url = API.GROUP.EXIT;
    url = url.replace(':code', body?.code)
    const { data } = await api.post(url, body, {
        headers: {
            Authorization: 'Bearer ' + session.user.data.token
        },
    });
    return data;
}

export const usePostExit = () => {
    return useMutation(postExit);
};
