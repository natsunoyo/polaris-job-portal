import { Menu, Avatar, } from '@mantine/core';
import {
    // IconMessageCircle,
    IconUserCircle,
    // IconFileCv,
    // IconMoon,
    // IconMoonStars,
    // IconSun,
    IconLogout,
} from '@tabler/icons-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeUser } from '../../Slices/UserSlice';

const ProfileMenu = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state: any) => state.profile);
    const user = useSelector((state: any) => state.user)
    const [opened, setOpened] = useState(false);
    // const [checked, setChecked] = useState(false);
    const handleLogout = () => {
        dispatch(removeUser())
    }

    return (
        <Menu opened={opened} onChange={setOpened} shadow="md" width={200}>
            <Menu.Target>
                <div className="flex gap-2 items-center cursor-pointer">
                    <div>{user.name}</div>
                    <Avatar src={profile.picture ? `data:image/jpeg;base64,${profile.picture}` : "avatar.png"} alt="" />
                </div>
            </Menu.Target>

            <Menu.Dropdown onChange={() => setOpened(true)}>
                <Link to={"/profile"}>
                    <Menu.Item leftSection={<IconUserCircle size={24} />}>
                        Профіль
                    </Menu.Item>
                </Link>

                {/* <Menu.Item leftSection={<IconMessageCircle size={24} />}>
                    Повідомлення
                </Menu.Item>
                <Menu.Item leftSection={<IconFileCv size={24} />}>
                    Резюме
                </Menu.Item> */}

                {/* <Menu.Item
                    leftSection={<IconMoon size={24} />}
                    rightSection={
                        <Switch
                            checked={checked}
                            onChange={(event) => setChecked(event.currentTarget.checked)}

                            size="md"
                            color="dark.4"
                            onLabel={<IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)" />}
                            offLabel={<IconMoonStars size={16} stroke={2.5} color="var(--mantine-color-blue-6)" />}
                        />
                    }
                >
                    Темний режим
                </Menu.Item> */}

                <Menu.Divider />

                <Menu.Item
                    onClick={handleLogout}
                    color="red"
                    leftSection={<IconLogout size={24} />}
                >
                    Вийти з акаунту
                </Menu.Item>
            </Menu.Dropdown>
        </Menu >
    );
}

export default ProfileMenu